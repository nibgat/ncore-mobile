import NCoreContext, {
    ConfigType
} from "ncore-context";
import {
    en,
    tr
} from "../locales";
import {
    LocaleContextType,
    LanguageType
} from "../../types";

class LocaleContextInheritance<T extends LanguageType> extends NCoreContext<LocaleContextType, ConfigType<LocaleContextType>> {
    locales = [
        en,
        tr
    ];

    constructor(initialState: T, config: ConfigType<LocaleContextType>) {
        super({
            localize: (translationKey: keyof NCore.TranslationType, parameters?: Array<string>) => {
                if(parameters && parameters.length) {
                    let temp = en.translations[translationKey];
                    parameters.forEach((item, index) => {
                        temp.replace(`{{${index}}}`, item);
                    });
                    return temp;
                }

                return en.translations[translationKey];
            },
            translations: en.translations,
            activeLocale: en.code,
            isRTL: en.isRTL
        }, config);

        this.prepare(initialState);
    }

    switchLocale = (localeCode: string) => {
        const selectedLanguageData = this.locales.find(e => e.code === localeCode) ?? en;

        if(!selectedLanguageData) {
            throw Error(`Can not find a locale for the given code: ${localeCode}`);
        }

        const translations = {
            ...en.translations,
            ...selectedLanguageData.translations
        };

        const newState = {
            activeLocale: localeCode,
            isRTL: selectedLanguageData.isRTL,
            translations: translations,
            localize: this.localize
        };

        this.state = newState;
        this.setState(newState);
    };

    localize = (localeCode: keyof NCore.TranslationType, parameters?: Array<string>) => {
        if(!this.state) {
            return "";
        }

        if(parameters && parameters.length) {
            let temp = this.state.translations[localeCode];
            parameters.forEach((item, index) => {
                temp.replace(`{{${index}}}`, item);
            });
            return temp;
        }

        return this.state.translations[localeCode];
    };

    prepare = (initialState: LanguageType) => {
        if(initialState.locales) {
            let newLangData: typeof this.locales = [];

            initialState.locales.forEach((lang) => {
                const alreadyExistsData = this.locales.find(_lang => _lang.code === lang.code);

                if(alreadyExistsData) {
                    newLangData.push({
                        ...alreadyExistsData,
                        ...lang,
                        translations: {
                            ...alreadyExistsData.translations,
                            ...lang.translations
                        }
                    });
                } else {
                    newLangData.push(lang);
                }
            });

            this.locales = newLangData;
        }

        if(initialState.initialLanguage) {
            this.switchLocale(initialState.initialLanguage);
            return;
        }

        this.switchLocale("en");
    };
};
export default LocaleContextInheritance;
