import enUS from "../locales/variants/en.json";

export type LocalesStore = {
    activeLocale: string;
    switchLocale: () => void;
    isRTL: boolean;
};

export type LocalesStoreReducer = Partial<LocalesStore>;
export type useNCoreLocalesReturnType = {
    activeLocale: "",
    switchLocale: () => void,
    localize: <T> (key: keyof T) => string,
    isRTL: boolean
};

const localesStore: LocalesStore = {
    activeLocale: "enUS",
    switchLocale: () => {},
    localize: enUS,
    isRTL: false
};
export default localesStore;