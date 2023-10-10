import NCoreContext, {
    ConfigType
} from "ncore-context";
import {
    en
} from "../locales";
import {
    LocaleContextType,
    LanguageType
} from "../../types";

class LocaleContextInheritance<T extends LanguageType> extends NCoreContext<LocaleContextType, ConfigType<LocaleContextType>> {
    locales = [
        en
    ];

    constructor(initialState: T, config: ConfigType<LocaleContextType>) {
        super({
            localize: (translationKey: keyof NCore.TranslationType) => en.translations[translationKey],
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
            localize: (translationKey: keyof NCore.TranslationType) => translations[translationKey]
        };

        this.state = newState;
        this.setState(newState);
    };

    localize = (localeCode: keyof NCore.TranslationType) => {
        if(!this.state) {
            return "";
        }

        return this.state.translations[localeCode];
    };

    prepare = (initialState: LanguageType) => {
        if(initialState.locales) {
            this.locales = initialState.locales;
        }

        if(initialState.initialLanguage) {
            this.switchLocale(initialState.initialLanguage);
            return;
        }

        this.switchLocale("en");
    };
};
export default LocaleContextInheritance;
