import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://https://ZAREZOV2.github.io/bmnewsrtanks/", // replace this with your deployed domain
  author: "Console",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "BM News",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  }
];
