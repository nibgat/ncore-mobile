import React, {
    ReducerAction,
    createContext,
    useReducer
} from 'react';
import {
    ProviderProps,
    Dispatch
} from './types';
import {
    ThemeStoreInitial,
    ThemeStore
} from '../constants';

export const ThemeContext = createContext<ThemeStore>(ThemeStoreInitial);
export const ThemeDispatchContext = createContext<ReducerAction<Dispatch>>(undefined);

const ThemeProvider = ({
    children
}: ProviderProps) => {
    const [theme, setTheme]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
            ...state, ...newValue 
        }),
        ThemeStoreInitial
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