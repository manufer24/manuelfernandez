import langEnglishVariant from "../lang/english";
import langSpanishVariant from "../lang/spanish";

const processVariant =
  (process.env.VARIANT as "english" | "spanish") || "english";

const processEnvironment =
  (process.env.ENVIRONMENT as "development" | "production") || "production";

const siteLanguage = {
  english: {
    env: "en" as "en",
    code: "en-US" as "en-US",
  },
  spanish: {
    env: "es" as "es",
    code: "es-VE" as "es-VE",
  },
};

const langs = {
  english: langEnglishVariant,
  spanish: langSpanishVariant,
};

const siteName = {
  english: "manuelfernandez-us",
  spanish: "Manuel Fernández | Portafolio Web", // TODO: update once uploaded
};

const siteOrigin = {
  english: "https://manuelfernandez-us.vercel.app/",
  spanish: "http://localhost:3000/", // TODO: update once uploaded
};
const defaultMetaTags = (variant: typeof processVariant) => [
  {
    hid: "og:image",
    property: "og:image",
    content: siteOrigin[variant] + `/assets/png/${variant}/preview.png`,
  },
  {
    hid: "og:image:secure_url",
    property: "og:image:secure_url",
    content: siteOrigin[variant] + `/assets/png/${variant}/preview.png`,
  },
  {
    hid: "og:site_name",
    property: "og:site_name",
    content: siteName[variant],
  },
  {
    hid: "og:type",
    property: "og:type",
    content: "website",
  },
  {
    hid: "og:locale",
    property: "og:locale",
    content: siteLanguage[variant].code,
  },
  {
    hid: "twitter:image",
    property: "twitter:image",
    content: siteOrigin[variant] + `/assets/png/${variant}/preview.png`,
  },
  {
    hid: "twitter:card",
    property: "twitter:card",
    content: "summary",
  },
];

export const variantConfig = {
  siteVariant: processVariant,
  siteName: siteName[processVariant],
  siteOrigin: siteOrigin[processVariant],
  siteLangs: langs,
  siteLangCode: siteLanguage,
  defaultMetaTags,
  processEnvironment,
};
