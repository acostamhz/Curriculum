import { portfolio } from "@/data/portfolio";

import InterestsHeader from "./InterestsHeader";
import InterestsGrid from "./InterestsGrid";

export default function Interests() {
  return (
    <section
      id="interests"
      className="container mx-auto px-6 py-28"
    >
      <InterestsHeader
        title={portfolio.interests.title}
        heading={portfolio.interests.heading}
        description={portfolio.interests.description}
      />

      <InterestsGrid items={portfolio.interests.items} />
    </section>
  );
}