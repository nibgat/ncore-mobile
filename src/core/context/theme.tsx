import React, {
    ReducerAction,
    createContext,
    useReducer,
    useEffect,
    ReactNode,
    Dispatch
} from "react";
import {
    NCoreReducerDispatch
} from "./types";
import {
    ThemeStoreInitial,
    ThemeStoreReducer,
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
    initialThemeKey?: NCore.ThemeKey;
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
};

const ThemeProvider = ({
    children,
    initialThemeKey = "light",
    themes,
    designTokens
}: ThemeProvider) => {
    const [theme, setTheme]: [ThemeStoreReducer, Dispatch<ThemeStoreReducer>] = useReducer(
        (state: ThemeStoreReducer, newValue: ThemeStoreReducer) => ({
            ...state, ...newValue
        }),
        ThemeStoreInitial,
        (initialState) => ({
            ...initialState,
            activeTheme: initialThemeKey
        })
    );

    useEffect(() => {
        setTheme({
            switchTheme: (themeKey: NCore.ThemeKey) => {
                const currentProjectTheme = themes?.find(e => e.key === themeKey);
        
                if(themeKey !== "light" && themeKey !== "dark" && !(currentProjectTheme)) {
                    throw Error(`Can not find a theme for the given themeKey: ${themeKey}.`);
                }
        
                const _typography = mergeGivenTypographyWithNCore(themeKey, currentProjectTheme?.typography);
                const _colors = mergeGivenColorsWithNCore(themeKey, currentProjectTheme?.colors);
                const _designTokens = mergeGivenDesignTokensWithNCore(designTokens);
        
                setTheme({
                    activeTheme: themeKey,
                    typography: _typography,
                    colors: _colors,
                    spaces: _designTokens.spaces,
                    borders: _designTokens.borders,
                    radiuses: _designTokens.radiuses,
                    disabled: _designTokens.disabled
                });
            }
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