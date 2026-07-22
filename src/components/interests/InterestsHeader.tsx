interface InterestsHeaderProps {
  title: string;
  heading: string;
  description: string;
}

export default function InterestsHeader({
  title,
  heading,
  description,
}: InterestsHeaderProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
        {title}
      </p>

      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {heading}
      </h2>

      <p className="mt-6 text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  );
}