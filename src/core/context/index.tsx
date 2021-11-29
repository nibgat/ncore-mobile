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
    useNCoreModalReturnType
} from "../constants";

type NCoreContext = {
    children: ReactNode;
    initialThemeKey?: NCore.ThemeKey;
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
    locales?: Array<Record<string, string>>
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
        <ModalProvider>
            <BottomSheetProvider>
                <LocalesProvider
                    locales={locales}
                >
                    <SettingsProvider>
                        {children}
                    </SettingsProvider>
                </LocalesProvider>
            </BottomSheetProvider>
        </ModalProvider>
    </ThemeProvider>;
};

export const useNCoreTheme = (): useNCoreThemeReturnType => useContext(ThemeContext);
export const useNCoreModal = (): useNCoreModalReturnType => useContext(ModalContext);
export const useNCoreBottomSheet = (): useNCoreBottomSheetReturnType => useContext(BottomSheetContext);
export const useNCoreLocales:<T extends Record<string, string>> = (): useNCoreLocalesReturnType => useContext(LocalesContext);
export const useNCoreSettings = (): useNCoreSettingsReturnType => useContext(SettingsContext);

export default NCoreContext;