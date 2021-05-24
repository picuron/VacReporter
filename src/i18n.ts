import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import { format as date_fns_tz_format } from "date-fns-tz";
import {
  arSA as date_fns_arSA,
  enCA as date_fns_enCA,
  de as date_fns_de,
  es as date_fns_es,
  frCA as date_fns_frCA,
  hr as date_fns_hr,
  pl as date_fns_pl,
  pt as date_fns_pt,
  ro as date_fns_ro,
  ru as date_fns_ru,
  sr as date_fns_sr,
  tr as date_fns_tr,
  zhCN as date_fns_zhCN,
  zhTW as date_fns_zhTW,
} from "date-fns/locale";
import ar from "./locales/ar/translation.json";
import de from "./locales/de/translation.json";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import fr from "./locales/fr/translation.json";
import hr from "./locales/hr/translation.json";
import pl from "./locales/pl/translation.json";
import pt from "./locales/pt/translation.json";
import ro from "./locales/ro/translation.json";
import ru from "./locales/ru/translation.json";
import sr from "./locales/sr/translation.json";
import tr from "./locales/tr/translation.json";
import zhCN from "./locales/zhCN/translation.json";
import zhTW from "./locales/zhTW/translation.json";

export const i18nconfig: InitOptions = {
  fallbackLng: "en-CA",
  debug: false,
  resources: {
    ar: { translation: ar }, // Arabic
    de: { translation: de }, // German
    en: { translation: en }, // English
    es: { translation: es }, // Spanish
    fr: { translation: fr }, // French
    hr: { translation: hr }, // Croatian
    pl: { translation: pl }, // Polish
    pt: { translation: pt }, // Portugese
    ro: { translation: ro }, // Romanian
    sr: { translation: sr }, // Serbian
    ru: { translation: ru }, // Russian
    tr: { translation: tr }, // Turkish
    "zh-CN": { translation: zhCN }, // Chinese (Traditional)
    "zh-TW": { translation: zhTW }, // Chinese (Simplified)
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
    format: function format(value, fmt, lng) {
      if (value instanceof Date && fmt !== undefined) {
        const lang = lng?.substring(0, 2);
        switch (lang) {
          case "ar":
            return date_fns_tz_format(value, fmt, { locale: date_fns_arSA });
          case "de":
            return date_fns_tz_format(value, fmt, { locale: date_fns_de });
          case "es":
            return date_fns_tz_format(value, fmt, { locale: date_fns_es });
          case "fr":
            return date_fns_tz_format(value, fmt, { locale: date_fns_frCA });
          case "hr":
            return date_fns_tz_format(value, fmt, { locale: date_fns_hr });
          case "pl":
            return date_fns_tz_format(value, fmt, { locale: date_fns_pl });
          case "pt":
            return date_fns_tz_format(value, fmt, { locale: date_fns_pt });
          case "ro":
            return date_fns_tz_format(value, fmt, { locale: date_fns_ro });
          case "ru":
            return date_fns_tz_format(value, fmt, { locale: date_fns_ru });
          case "sr":
            return date_fns_tz_format(value, fmt, { locale: date_fns_sr });
          case "tr":
            return date_fns_tz_format(value, fmt, { locale: date_fns_tr });
          case "zh":
            if (lng === "zh-CN") {
              return date_fns_tz_format(value, fmt, { locale: date_fns_zhCN }); // Simplified Chinese
            }
            return date_fns_tz_format(value, fmt, { locale: date_fns_zhTW }); // Traditional Chinese
          default:
            return date_fns_tz_format(value, fmt, { locale: date_fns_enCA });
        }
      }
      return value;
    },
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(i18nconfig, function callback() {
    // We use zh-CN for Simplified Chinese and zh-TW for Traditional Chinese
    // If language detected by browser is zh-HK or zh-MO (Hong Kong/Macau) switch to zh-TW (Taiwan)
    // If language detected by browser is zh-SG (Singapore) switch to zh-CN (Mainland China)
    // We will need to do this for other languages for which we implement multiple translations (e.g. Punjabi)
    // This is not needed for other languages
    if (i18n?.language === "zh-HK" || i18n?.language === "zh-MO") {
      i18n.changeLanguage("zh-TW");
    }
    if (i18n?.language === "zh-SG") {
      i18n.changeLanguage("zh-CN");
    }
  });
