import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

const initI18n = async (lng = "th") => {
  const i18n = createInstance({
    lng,
    fallbackLng: "th",
    supportedLngs: ["th", "en"],
    defaultNS: "common",
    ns: ["common", "home", "properties", "property", "about", "contact"],
  });

  await i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init();

  return i18n;
};

export default initI18n;