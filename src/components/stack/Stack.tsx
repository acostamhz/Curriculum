"use client";

import { portfolio } from "@/data/portfolio";

import StackCategory from "./StackCategory";

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            {portfolio.stack.title}
          </span>

          <h2 className="mt-6 text-5xl font-black lg:text-6xl">
            {portfolio.stack.heading}
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            {portfolio.stack.description}
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {portfolio.stack.categories.map((category) => (
            <StackCategory
              key={category.name}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}