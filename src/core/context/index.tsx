import React, {
    useContext,
    FC
} from "react";
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
    useNCoreLocalesReturnType,
    useNCoreThemeReturnType,
    LocaleConfig
} from "../constants";
import {
    Host 
} from "react-native-portalize";

type NCoreContext = {
    initialThemeKey?: NCore.ThemeKey;
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
    locales?: Array<LocaleConfig>;
};

const NCoreContext: FC<NCoreContext> = ({
    children,
    initialThemeKey,
    themes,
    designTokens,
    locales
}) => {
    return <ThemeProvider
        initialThemeKey={initialThemeKey}
        themes={themes}
        designTokens={designTokens}
    >
        <LocalesProvider
            locales={locales}
        >
            <Host>
                <BottomSheetProvider>
                    {children}
                </BottomSheetProvider>
            </Host>
        </LocalesProvider>
    </ThemeProvider>;
};

export const useNCoreTheme = (): useNCoreThemeReturnType => useContext(ThemeContext);
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

export default NCoreContext;
