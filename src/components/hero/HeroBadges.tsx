import { Brain, Server, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function HeroBadges() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <Badge variant="secondary" className="gap-2 rounded-full px-4 py-2">
        <Brain className="h-4 w-4" />
        Artificial Intelligence
      </Badge>

      <Badge variant="secondary" className="gap-2 rounded-full px-4 py-2">
        <Server className="h-4 w-4" />
        Backend Engineering
      </Badge>

      <Badge variant="secondary" className="gap-2 rounded-full px-4 py-2">
        <ShieldCheck className="h-4 w-4" />
        Cybersecurity
      </Badge>
    </div>
  );
}