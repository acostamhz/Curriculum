import InterestCard from "./InterestCard";

interface InterestItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface InterestsGridProps {
  items: InterestItem[];
}

export default function InterestsGrid({
  items,
}: InterestsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <InterestCard key={item.title} {...item} />
      ))}
    </div>
  );
}