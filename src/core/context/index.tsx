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
/*
import LocalesProvider, {
    LocalesDispatchContext,
    LocalesContext
} from "./locales";
*/
import BottomSheetProvider, {
    BottomSheetContext
} from "./bottomSheet";
import ThemeProvider, {
    ThemeContext
} from "./theme";
import {
    useNCoreBottomSheetReturnType,
    useNCoreSettingsReturnType,
    useNCoreThemeReturnType,
    useNCoreModalReturnType
} from "../constants";

type NCoreContext = {
    children: ReactNode;
    initialThemeKey?: NCore.ThemeKey;
};

const NCoreContext = ({
    children,
    initialThemeKey
}: NCoreContext) => {
    return <ThemeProvider
        initialThemeKey={initialThemeKey}
    >
        <ModalProvider>
            <BottomSheetProvider>
                {/*<LocalesProvider>*/}
                <SettingsProvider>
                    {children}
                </SettingsProvider>
                {/*</LocalesProvider>*/}
            </BottomSheetProvider>
        </ModalProvider>
    </ThemeProvider>;
};

export const useNCoreTheme = (): useNCoreThemeReturnType => useContext(ThemeContext);

export const useNCoreModal = (): useNCoreModalReturnType => useContext(ModalContext);

export const useNCoreBottomSheet = (): useNCoreBottomSheetReturnType => useContext(BottomSheetContext);

/*
export const useNCoreLocales = () => [
    useContext(LocalesContext),
    useContext(LocalesDispatchContext)
];
*/

export const useNCoreSettings = (): useNCoreSettingsReturnType => useContext(SettingsContext);

export default NCoreContext;