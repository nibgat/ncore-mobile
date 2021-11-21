import trTR from "./variants/tr.json";
import enUS from "./variants/en.json";

const locales = {
    trTR,
    enUS
};

type Type = {
    language: keyof typeof locales,
    mergeLocales: typeof locales
};

const getLocales = ({
    mergeLocales,
    language
}: Type) => {
    let _locales = locales[language];
    if(mergeLocales && mergeLocales[language]) {
        _locales = {
            ..._locales,
            ...mergeLocales[language]
        };
    }
    return _locales;
};
export default getLocales;