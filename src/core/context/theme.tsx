import React, {
    ReducerAction,
    createContext,
    useReducer,
    useEffect,
    ReactNode
} from 'react';
import {
    NCoreReducerDispatch,
    ProviderProps
} from './types';
import {
    ThemeStoreInitial,
    ThemeStore
} from '../constants';

export const ThemeContext = createContext<ThemeStore>(ThemeStoreInitial);
export const ThemeDispatchContext = createContext<ReducerAction<NCoreReducerDispatch>>(undefined);

type ThemeProvider = {
    children: ReactNode;
    themes: Array<NCore.Theme>;
};

const ThemeProvider = ({
    children,
    themes,
    designTokens
}: ThemeProvider) => {
    const [theme, setTheme] = useReducer(
        (state: ThemeStore, newValue: ThemeStore) => ({
            ...state, ...newValue
        }),
        ThemeStoreInitial
    );

    const switchTheme = (themeKey: NCore.ThemeKey) => {
        const currentProjectTheme = themes.find(e => e.key === themeKey);
        const typography = generateTypography(themeKey, currentProjectTheme?.typography);
        const colors = generateColors(themeKey, currentProjectTheme?.colors);
        const _designTokens = generateDesignTokens(designTokens);

        setTheme({
            typography,
            colors,
            designTokens: _designTokens
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