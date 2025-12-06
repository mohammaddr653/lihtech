export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "درباره ما",
      href: "/about",
    },
    {
      label: "نمونه کار ها",
      href: "/portfolio",
    },
    {
      label: "ارتباط با ما",
      href: "/contact",
    },
    {
      label: "مستندات",
      href: "/docs",
    },
  ],
  links: {
    github: "https://github.com/mohammaddr653/lihtech",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
