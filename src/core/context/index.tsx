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
    useNCoreLocalizationReturnType,
    useNCoreBottomSheetReturnType,
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
            initialLanguage={config?.initialLanguage}
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
export const useNCoreLocalization = (): useNCoreLocalizationReturnType => {
    const {
        activeLocale,
        switchLocale,
        isRTL,
        currentLocalizationData
    } = useContext(LocalesContext);

    return {
        localize: (localizationKey: keyof NCore.Translation, params?: Array<string>): string => {
            if(!params) {
                return currentLocalizationData[localizationKey];
            }

            let returnString = currentLocalizationData[localizationKey];
            params.forEach((item, index) => {
                const pattern = `\\$\\{${index}\\}`;
                const regex = new RegExp(pattern, "g");
                returnString = returnString.replace(regex, item);
            });
            return returnString;
        },
        activeLocale,
        switchLocale,
        isRTL
    };
};

export default NCoreContext;
