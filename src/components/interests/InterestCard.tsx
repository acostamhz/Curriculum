import { Card } from "@/components/ui/card";


interface InterestCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function InterestCard({
  title,
  description,
  icon,
}: InterestCardProps) {
  return (
    <Card className="h-full rounded-3xl border-border/60 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
      <div className="mb-6 text-primary">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-semibold">
        {title}
      </h3>

      <p className="leading-7 text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}