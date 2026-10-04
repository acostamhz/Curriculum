import { randomUUID } from "node:crypto";

export const MAX_MESSAGE_LENGTH = 1000;
const MAX_BODY_BYTES = 8 * 1024;
const SESSION_COOKIE = "june_sid";
const SESSION_TTL_SECONDS = 60 * 60 * 6;

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Límites en memoria: son por instancia y sirven como defensa básica; en producción
// conviene sumar un límite de gasto en la consola de Google AI.
const RATE_LIMITS = [
  { name: "minute", limit: 8, windowMs: 60_000 },
  { name: "day", limit: 150, windowMs: 24 * 60 * 60_000 },
];
const MAX_TRACKED_CLIENTS = 5000;

const hits = new Map<string, number[]>();

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");

  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function checkRateLimit(
  clientId: string,
): { allowed: true } | { allowed: false; retryAfter: number } {
  const now = Date.now();
  const longestWindow = Math.max(...RATE_LIMITS.map((rule) => rule.windowMs));
  const timestamps = (hits.get(clientId) ?? []).filter(
    (time) => now - time < longestWindow,
  );

  for (const rule of RATE_LIMITS) {
    const recent = timestamps.filter((time) => now - time < rule.windowMs);

    if (recent.length >= rule.limit) {
      return {
        allowed: false,
        retryAfter: Math.ceil((rule.windowMs - (now - recent[0])) / 1000),
      };
    }
  }

  timestamps.push(now);
  hits.delete(clientId);
  hits.set(clientId, timestamps);

  if (hits.size > MAX_TRACKED_CLIENTS) {
    const oldest = hits.keys().next().value;
    if (oldest !== undefined) hits.delete(oldest);
  }

  return { allowed: true };
}

// Bloquea peticiones desde otros sitios web para que no usen la API como proxy gratuito.
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function readSessionId(request: Request): string | null {
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${SESSION_COOKIE}=([^;]+)`));

  return match && UUID_PATTERN.test(match[1]) ? match[1] : null;
}

export interface ChatRequest {
  message: string;
  language: "en" | "es";
  sessionId: string;
  setCookie?: string;
}

export type ChatRequestResult =
  | { ok: true; data: ChatRequest }
  | { ok: false; response: Response };

function fail(status: number, error: string, headers?: HeadersInit) {
  return {
    ok: false as const,
    response: Response.json({ error }, { status, headers }),
  };
}

export async function parseChatRequest(
  request: Request,
): Promise<ChatRequestResult> {
  if (!isSameOrigin(request)) {
    return fail(403, "Forbidden.");
  }

  const rate = checkRateLimit(getClientIp(request));

  if (!rate.allowed) {
    return fail(429, "Too many requests. Please try again later.", {
      "Retry-After": String(rate.retryAfter),
    });
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);

  if (declaredLength > MAX_BODY_BYTES) {
    return fail(413, "Request too large.");
  }

  let body: unknown;

  try {
    const raw = await request.text();

    if (raw.length > MAX_BODY_BYTES) {
      return fail(413, "Request too large.");
    }

    body = JSON.parse(raw);
  } catch {
    return fail(400, "Invalid request.");
  }

  const { message, language } = (body ?? {}) as Record<string, unknown>;

  if (typeof message !== "string" || !message.trim()) {
    return fail(400, "Message is required.");
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return fail(400, `Message must be at most ${MAX_MESSAGE_LENGTH} characters.`);
  }

  // El identificador de sesión lo emite el servidor; nunca se acepta el que envíe el cliente.
  let sessionId = readSessionId(request);
  let setCookie: string | undefined;

  if (!sessionId) {
    sessionId = randomUUID();
    const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
    setCookie = `${SESSION_COOKIE}=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_TTL_SECONDS}${secure}`;
  }

  return {
    ok: true,
    data: {
      message: message.trim(),
      language: language === "es" ? "es" : "en",
      sessionId,
      setCookie,
    },
  };
}