import React, {
    ReducerAction,
    createContext,
    useReducer,
    useEffect,
    ReactNode
} from "react";
import {
    NCoreReducerDispatch
} from "./types";
import {
    ThemeStoreInitial,
    ThemeStore
} from "../constants";
import {
    mergeGivenColorsWithNCore,
    mergeGivenTypographyWithNCore,
    mergeGivenDesignTokensWithNCore
} from "../theme";

export const ThemeContext = createContext<ThemeStore>(ThemeStoreInitial);
export const ThemeDispatchContext = createContext<ReducerAction<NCoreReducerDispatch>>(undefined);

type ThemeProvider = {
    children: ReactNode;
    themes: Array<NCore.Theme>;
    designTokens: NCore.DesignTokens;
    initialThemeKey: NCore.ThemeKey;
};

const ThemeProvider = ({
    children,
    themes,
    designTokens,
    initialThemeKey
}: ThemeProvider) => {
    const [theme, setTheme] = useReducer(
        (state: ThemeStore, newValue: ThemeStore) => ({
            ...state, ...newValue
        }),
        ThemeStoreInitial
    );

    const switchTheme = (themeKey: NCore.ThemeKey) => {
        const currentProjectTheme = themes.find(e => e.key === themeKey);

        if(themeKey !== "light" && themeKey !== "dark" && !(currentProjectTheme)) {
            throw Error(`Can not find a theme for the given themeKey: ${themeKey}.`);
        }

        const typography = mergeGivenTypographyWithNCore(themeKey, currentProjectTheme?.typography);
        const colors = mergeGivenColorsWithNCore(themeKey, currentProjectTheme?.colors);
        const _designTokens = mergeGivenDesignTokensWithNCore(designTokens);

        setTheme({
            typography,
            colors,
            designTokens: _designTokens,
            activeTheme: initialThemeKey
        });
    };

    useEffect(() => {
        setTheme({
            switchTheme
        });
    }, [themes, designTokens]);

    return <ThemeContext.Provider
        value={theme}
    >
        <ThemeDispatchContext.Provider
            value={setTheme}
        >
            {children}
        </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>;
};
export default ThemeProvider;