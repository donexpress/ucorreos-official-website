import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import { translation as English} from "../helper/i18n/en";
import { translation as Spanish } from "../helper/i18n/es";
import { translation as Chinesse } from "../helper/i18n/cn";
const resources = {
    en: {
        translation: English
    },
    es: {
        translation: Spanish
    },
    cn: {
        translation: Chinesse
    }
};
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;