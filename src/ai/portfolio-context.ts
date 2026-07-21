import { portfolio } from "@/data/portfolio";

export function buildPortfolioContext(): string {
  return `
# PERSONAL INFORMATION

Name:
${portfolio.name}

Title:
${portfolio.title}

Subtitle:
${portfolio.subtitle}

Location:
${portfolio.location}

Email:
${portfolio.email}

GitHub:
${portfolio.github}

LinkedIn:
${portfolio.linkedin}

--------------------------------------------------

# PROFESSIONAL SUMMARY

${portfolio.description}

--------------------------------------------------

# ABOUT

${portfolio.about.heading}

${portfolio.about.description}

--------------------------------------------------

# JOURNEY

${portfolio.timeline.items
  .map(
    (item) => `
${item.year}
${item.title}

${item.description}
`
  )
  .join("\n")}

--------------------------------------------------

# PROJECTS

${portfolio.projects.items
  .map(
    (project) => `
Project:
${project.title}

Description:
${project.description}

Technologies:
${project.technologies.join(", ")}

GitHub:
${project.github}

Demo:
${project.demo}
`
  )
  .join("\n")}

--------------------------------------------------

# TECHNOLOGIES

${portfolio.stack.categories
  .map(
    (category) => `
${category.name}

${category.items.join(", ")}
`
  )
  .join("\n")}

--------------------------------------------------

# CERTIFICATIONS

${portfolio.certifications.items
  .map(
    (certification) => `
${certification.title}

Issuer:
${certification.issuer}

Year:
${certification.year}
`
  )
  .join("\n")}
`;
}