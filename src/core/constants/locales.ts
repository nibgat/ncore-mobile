import {
    en
} from "../locales";

export type LocalesStore = {
    activeLocale: string;
    switchLocale: (localizationKey: string) => void;
    isRTL: boolean;
    localize: (localizationKey: string) => string;
    currentLocalizationData: Record<string, string>;
};

export type LocaleConfig = {
    code: string;
    isRTL: boolean;
    translations: Record<string, string>;
};

export type useNCoreLocalesReturnType = Omit<LocalesStore, "currentLocalizationData">;

const localesStore: LocalesStore = {
    currentLocalizationData: en.translations,
    switchLocale: () => {},
    activeLocale: "en",
    localize: () => "",
    isRTL: false
};
export default localesStore;