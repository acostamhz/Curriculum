type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 lg:px-12"
    >
      {children}
    </section>
  );
}