"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { portfolio } from "@/data/portfolio";

type Language = "en" | "es";

const stackCategoryNames: Record<string, string> = {
  Languages: "Lenguajes",
  "Artificial Intelligence": "Inteligencia artificial",
  Cloud: "Nube",
  Tools: "Herramientas",
};

const spanishPortfolio: typeof portfolio = {
  ...portfolio,
  title: "Ingeniero de software",
  subtitle: "Especialista en ciberseguridad • Desarrollador de IA",
  description:
    "Creo sistemas inteligentes que impulsan empresas mediante la ingeniería de software, la ciberseguridad y la inteligencia artificial.",
  buttons: {
    projects: "Ver proyectos",
    contact: "Contáctame",
  },
  badges: [
    "Inteligencia artificial",
    "Ingeniería frontend",
    "Ciberseguridad",
  ],
  about: {
    ...portfolio.about,
    title: "Sobre mí",
    heading: "Creo software que resuelve problemas reales de negocio.",
    description:
      "Soy profesional en Ingeniería de Software, apasionado por el desarrollo frontend, la inteligencia artificial y la ciberseguridad. Disfruto crear aplicaciones escalables, aprender nuevas tecnologías y diseñar soluciones que combinan una arquitectura limpia con experiencias de usuario excepcionales.",
    stats: [
      { value: "2", label: "Años aprendiendo" },
      { value: "3+", label: "Proyectos" },
      { value: "6+", label: "Estudios y certificaciones" },
      { value: "15+", label: "Tecnologías" },
    ],
  },
  timeline: {
    ...portfolio.timeline,
    title: "Trayectoria",
    heading: "Mi camino de estudiante de ingeniería de software a desarrollador de software freelance.",
    description:
      "Impulsado por la curiosidad, el aprendizaje continuo y el emprendimiento, cada logro ha fortalecido mi capacidad para diseñar soluciones de software seguras, escalables e inteligentes. Me gradué con un promedio semestral de 4,5/5,0, según las estadísticas de la universidad.",
    items: [
      {
        year: "Julio de 2020",
        title: "Ingeniería de Software",
        description:
          "Comencé mi carrera de Ingeniería de Software en la Universidad Autónoma de Occidente, donde construí bases sólidas en programación, algoritmos y arquitectura de software.",
      },
      {
        year: "Agosto de 2024",
        title: "Desarrollador web freelance",
        description:
          "Como freelancer, construí el sitio corporativo de Grupo Caishen, un grupo empresarial que adquiere y administra empresas de distintos sectores, con Next.js, TypeScript y Tailwind CSS, con un diseño moderno y una arquitectura escalable.",
      },
      {
        year: "Marzo de 2025",
        title: "Desarrollador freelance",
        description:
          "Como freelancer, realicé trabajo de software y tecnología para Hobisu, un negocio de importación y distribución de dispositivos Apple, apoyando su crecimiento y una experiencia confiable para los clientes.",
      },
      {
        year: "Agosto de 2026",
        title: "Desarrollador de software freelance",
        description:
          "Como freelancer, desarrollé Luka AI para Zendcode, una empresa tecnológica que crea soluciones con inteligencia artificial para la gestión de negocios. Luka es un gerente virtual que ayuda a pequeños negocios a operar con mayor eficiencia, creado con NestJS, OpenAI, PostgreSQL y Docker.",
      },
      {
        year: "Septiembre de 2026",
        title: "Cali Emergencia",
        description:
          "Proyecto freelance: desarrollé con Next.js, TypeScript y Tailwind CSS una plataforma humanitaria, sin ánimo de lucro y de código abierto, creada para apoyar a las comunidades afectadas por el sismo de magnitud 7,4 ocurrido en Colombia en agosto de 2026. Ayuda a coordinar información crítica, conectar a las personas con asistencia y fortalecer la respuesta comunitaria durante emergencias.",
      },
    ],
  },
  stack: {
    ...portfolio.stack,
    title: "Tecnologías",
    heading: "Herramientas para crear software moderno.",
    description:
      "Una selección de lenguajes, frameworks y herramientas que utilizo para diseñar, desarrollar y desplegar aplicaciones escalables.",
    categories: portfolio.stack.categories.map((category) => ({
      ...category,
      name: stackCategoryNames[category.name] ?? category.name,
    })),
  },
  projects: {
    ...portfolio.projects,
    title: "Proyectos destacados",
    heading: "Software creado para resolver problemas reales.",
    description:
      "Una selección de proyectos que muestra mi experiencia en desarrollo frontend, inteligencia artificial y arquitectura de software.",
    items: [
      {
        ...portfolio.projects.items[0],
        description:
          "Gerente virtual con inteligencia artificial que ayuda a pequeños negocios a automatizar decisiones, analizar ventas y optimizar recursos.",
      },
      {
        ...portfolio.projects.items[1],
        description:
          "Sitio corporativo desarrollado para mi empresa tecnológica, con un diseño moderno y una arquitectura escalable.",
      },
      {
        ...portfolio.projects.items[2],
        description:
          "Plataforma humanitaria, sin ánimo de lucro y de código abierto, creada para apoyar a las comunidades afectadas por el sismo en Colombia.",
      },
      {
        ...portfolio.projects.items[3],
        description:
          "Portafolio personal bilingüe con un asistente de IA que presenta mi experiencia, proyectos y habilidades técnicas.",
      },
    ],
  },
  certifications: {
    ...portfolio.certifications,
    title: "Formación y certificaciones",
    heading: "El aprendizaje continuo es parte de mi forma de construir.",
    description:
      "Mi formación académica, mis estudios de idiomas y mis certificaciones profesionales reflejan mi compromiso con el aprendizaje continuo en ingeniería de software, inteligencia artificial, bases de datos, ciberseguridad y finanzas.",
    items: [
      { ...portfolio.certifications.items[0], title: "Curso de inglés B1" },
      { ...portfolio.certifications.items[1], title: "Ingeniería de Software" },
      { ...portfolio.certifications.items[2], title: "Administrador de bases de datos" },
      { ...portfolio.certifications.items[3], title: "Ingeniería de inteligencia artificial" },
      { ...portfolio.certifications.items[4], title: "Mercados financieros" },
      {
        ...portfolio.certifications.items[5],
        title: "Especialización en ciberseguridad",
        year: "En curso",
      },
    ],
  },
  interests: {
    ...portfolio.interests,
    title: "Más allá del código",
    heading: "Lo que disfruto fuera de la ingeniería de software.",
    description:
      "Además de programar, disfruto actividades que inspiran la creatividad, la disciplina y el aprendizaje continuo.",
    items: [
      {
        ...portfolio.interests.items[0],
        title: "Lectura",
        description:
          "Disfruto libros sobre tecnología, emprendimiento, finanzas y desarrollo personal.",
      },
      {
        ...portfolio.interests.items[1],
        title: "Fútbol",
        description:
          "Jugar fútbol me ayuda a mantenerme activo, ser competitivo y trabajar mejor en equipo.",
      },
      {
        ...portfolio.interests.items[2],
        title: "Cine",
        description:
          "Disfruto la ciencia ficción, los thrillers y las películas basadas en hechos reales.",
      },
      {
        ...portfolio.interests.items[3],
        title: "Videojuegos",
        description:
          "Los videojuegos combinan tecnología, diseño y estrategia.",
      },
      {
        ...portfolio.interests.items[4],
        title: "Automóviles",
        description:
          "Me apasionan los automóviles, la ingeniería y la innovación automotriz.",
      },
      {
        ...portfolio.interests.items[5],
        title: "Tecnología",
        description:
          "Me encanta descubrir nuevos dispositivos y tecnologías emergentes.",
      },
    ],
  },
  contact: {
    ...portfolio.contact,
    title: "Contacto",
    heading: "Construyamos algo extraordinario.",
    description:
      "Siempre me interesan las ideas ambiciosas relacionadas con inteligencia artificial, ingeniería frontend, ciberseguridad y emprendimiento.",
    items: [
      ...portfolio.contact.items.slice(0, 3),
      {
        ...portfolio.contact.items[3],
        title: "Ubicación",
        value: "Santiago de Cali, Colombia",
      },
    ],
  },
  assistant: {
    ...portfolio.assistant,
    title: "Conoce a June",
    heading: "Pregúntale lo que quieras a June.",
    description:
      "June (Unified Neural Engine) está entrenada con mi experiencia profesional, proyectos, habilidades técnicas y certificaciones. Puedes preguntarle lo que quieras sobre mi trayectoria.",
    suggestions: [
      "Cuéntame sobre ti",
      "Explícame Luka AI",
      "¿Qué tecnologías frontend conoce?",
      "Cuéntame sobre Grupo Caishen",
      "¿Por qué ciberseguridad?",
      "Muéstrame sus certificaciones",
      "Explícame Cali Emergencia",
    ],
  },
};

const ui = {
  en: {
    navigation: {
      about: "About",
      journey: "Journey",
      projects: "Projects",
      stack: "Stack",
      interests: "Interests",
      assistant: "AI Assistant",
      contact: "Contact",
      brandRole: "Software engineer",
      main: "Main navigation",
      mobile: "Mobile navigation",
      home: "Jhoan Camilo, home",
      language: "Choose language",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      availability: "Available for new opportunities",
      welcome: "Welcome to my",
      curriculum: "curriculum",
      viewProjects: "View projects",
      contact: "Contact me",
    },
    project: {
      featured: "Featured Project",
      demo: "Live Demo",
    },
    assistant: {
      title: "AI Assistant",
      subtitle: "Ask me anything about Jhoan's experience.",
      placeholder: "Ask me anything...",
      stop: "Stop generation",
      send: "Send message",
      greeting:
        "👋 Hi! I'm Jhoan's AI Assistant. Ask me anything about my experience, projects or skills.",
      error: "❌ Sorry, something went wrong while contacting the AI.",
    },
    contact: {
      cta: "Let's work together",
      location: "Location",
    },
    photo: {
      projects: "Projects",
      certifications: "Certifications",
      startup: "Startup",
    },
  },
  es: {
    navigation: {
      about: "Sobre mí",
      journey: "Trayectoria",
      projects: "Proyectos",
      stack: "Tecnologías",
      interests: "Intereses",
      assistant: "Asistente IA",
      contact: "Contacto",
      brandRole: "Ingeniero de software",
      main: "Navegación principal",
      mobile: "Navegación móvil",
      home: "Jhoan Camilo, inicio",
      language: "Elegir idioma",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
    hero: {
      availability: "Disponible para nuevos proyectos",
      welcome: "Bienvenido a mi",
      curriculum: "currículum",
      viewProjects: "Ver proyectos",
      contact: "Hablemos",
    },
    project: {
      featured: "Proyecto destacado",
      demo: "Demo en vivo",
    },
    assistant: {
      title: "Asistente de IA",
      subtitle: "Pregúntame lo que quieras sobre la experiencia de Jhoan.",
      placeholder: "Escribe tu pregunta...",
      stop: "Detener respuesta",
      send: "Enviar mensaje",
      greeting:
        "👋 ¡Hola! Soy el asistente de IA de Jhoan. Pregúntame sobre su experiencia, proyectos o habilidades.",
      error: "❌ Lo sentimos, ocurrió un error al contactar a la IA.",
    },
    contact: {
      cta: "Trabajemos juntos",
      location: "Ubicación",
    },
    photo: {
      projects: "Proyectos",
      certifications: "Certificaciones",
      startup: "Emprendimiento",
    },
  },
} as const;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  portfolio: typeof portfolio;
  ui: (typeof ui)[Language];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): Language {
  return window.localStorage.getItem("portfolio-language") === "es" ? "es" : "en";
}

function subscribeToLanguage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-language-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-language-change", onChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    readStoredLanguage,
    () => "en",
  );

  useEffect(() => {
    const title =
      language === "es"
        ? "Jhoan Camilo - Ingeniero de Software"
        : "Jhoan Camilo - Junior Software Engineer";
    const updateMetadata = () => {
      document.documentElement.lang = language;
      if (document.title !== title) {
        document.title = title;
      }
      const description = document.querySelector('meta[name="description"]');
      const descriptionContent =
        language === "es"
          ? "Ingeniero de software | Especialista en ciberseguridad | Desarrollador de IA"
          : "Software Engineer | Cybersecurity Specialist | AI Builder";
      if (
        description &&
        description.getAttribute("content") !== descriptionContent
      ) {
        description.setAttribute("content", descriptionContent);
      }
    };

    updateMetadata();
    const observer = new MutationObserver(updateMetadata);
    observer.observe(document.head, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem("portfolio-language", nextLanguage);
    window.dispatchEvent(new Event("portfolio-language-change"));
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      portfolio: language === "es" ? spanishPortfolio : portfolio,
      ui: ui[language],
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider.");
  }
  return context;
}

export function usePortfolio() {
  return useLanguage().portfolio;
}
