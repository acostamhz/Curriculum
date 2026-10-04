import { Brain, Monitor, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { usePortfolio } from "@/i18n/LanguageProvider";

export default function HeroBadges() {
  const portfolio = usePortfolio();
  const icons = [Brain, Monitor, ShieldCheck];

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {portfolio.badges.map((badge, index) => {
        const Icon = icons[index];
        return (
          <Badge key={badge} variant="secondary" className="gap-2 rounded-full px-4 py-2 text-sm">
            <Icon className="h-4 w-4" />
            {badge}
          </Badge>
        );
      })}
    </div>
  );
}