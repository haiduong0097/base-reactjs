import i18n from "i18next";
import listTranslationEn from "./translate/en";
import listTranslationVi from "./translate/vi";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  ns: ["translate"],
  defaultNS: "translate",
  fallbackLng: "en",
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  lng: localStorage.getItem("appLang") || "en",
  resources: {
    en: {
      translate: listTranslationEn,
    },
    vi: {
      translate: listTranslationVi,
    },
  },
});

export default i18n;
