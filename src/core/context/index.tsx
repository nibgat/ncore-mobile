import React, {
    useContext,
    ReactNode
} from "react";
import ModalProvider, {
    ModalContext
} from "./modal";
import SettingsProvider, {
    SettingsContext
} from "./settings";
import BottomSheetProvider, {
    BottomSheetContext
} from "./bottomSheet";
import LocalesProvider, {
    LocalesContext
} from "./locales";
import ThemeProvider, {
    ThemeContext
} from "./theme";
import {
    useNCoreBottomSheetReturnType,
    useNCoreSettingsReturnType,
    useNCoreLocalesReturnType,
    useNCoreThemeReturnType,
    useNCoreModalReturnType,
    LocaleConfig
} from "../constants";

type NCoreContext = {
    children: ReactNode;
    initialThemeKey?: NCore.ThemeKey;
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
    locales?: Array<LocaleConfig>;
};

const NCoreContext = ({
    children,
    initialThemeKey,
    themes,
    designTokens,
    locales
}: NCoreContext) => {
    return <ThemeProvider
        initialThemeKey={initialThemeKey}
        themes={themes}
        designTokens={designTokens}
    >
        <LocalesProvider
            locales={locales}
        >
            <ModalProvider>
                <BottomSheetProvider>
                    <SettingsProvider>
                        {children}
                    </SettingsProvider>
                </BottomSheetProvider>
            </ModalProvider>
        </LocalesProvider>
    </ThemeProvider>;
};

export const useNCoreTheme = (): useNCoreThemeReturnType => useContext(ThemeContext);
export const useNCoreModal = (): useNCoreModalReturnType => useContext(ModalContext);
export const useNCoreBottomSheet = (): useNCoreBottomSheetReturnType => useContext(BottomSheetContext);
export const useNCoreLocale = (): useNCoreLocalesReturnType => {
    const {
        activeLocale,
        switchLocale,
        isRTL,
        currentLocalizationData
    } = useContext(LocalesContext);

    return {
        localize: (localizationKey: keyof NCore.Translation): string => {
            return currentLocalizationData[localizationKey];
        },
        activeLocale,
        switchLocale,
        isRTL
    };
};
export const useNCoreSettings = (): useNCoreSettingsReturnType => useContext(SettingsContext);

export default NCoreContext;