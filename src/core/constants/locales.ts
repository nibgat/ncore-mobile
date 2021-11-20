import trTR from '../locales/variants/tr.json';

export type LocalesStore = {
    mergeLocales: () => void;
    data: keyof typeof trTR; // bura;
    initialConfigs: boolean;
    mergedLocales: boolean;
    value: string;
};

const localesStore: LocalesStore = {
    mergeLocales: () => {},
    initialConfigs: false,
    mergedLocales: false,
    value: "trTR",
    data: trTR // bura;
};
export default localesStore;