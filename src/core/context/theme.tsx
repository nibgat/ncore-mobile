import React, {
    ReducerAction,
    createContext,
    useReducer,
    ReactNode
} from "react";
import {
    NCoreReducerDispatch
} from "./types";
import {
    ThemeStoreInitial,
    ThemeStore
} from "../constants";

export const ThemeContext = createContext<ThemeStore>(ThemeStoreInitial);
export const ThemeDispatchContext = createContext<ReducerAction<NCoreReducerDispatch>>(undefined);

type ThemeProvider = {
    children: ReactNode;
    initialThemeKey?: NCore.ThemeKey;
};

const ThemeProvider = ({
    children,
    initialThemeKey = "light"
}: ThemeProvider) => {
    const [theme, setTheme] = useReducer(
        (state: ThemeStore, newValue: ThemeStore) => ({
            ...state, ...newValue
        }),
        ThemeStoreInitial,
        (initialState) => ({
            ...initialState,
            activeTheme: initialThemeKey
        })
    );

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