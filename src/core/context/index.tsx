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
    useNCoreThemeReturnType
} from "../constants";
import {
    Host 
} from "react-native-portalize";
import {
    NCoreConfig 
} from "../types";

type NCoreContext = {
    config?: NCoreConfig
};

const NCoreContext: FC<NCoreContext> = ({
    children,
    config
}) => {
    return <ThemeProvider
        initialThemeKey={config?.initialThemeKey}
        themes={config?.themes}
        designTokens={config?.designTokens}
    >
        <LocalesProvider
            locales={config?.locales}
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
