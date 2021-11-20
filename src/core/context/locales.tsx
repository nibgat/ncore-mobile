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
    LocalesStoreInitial,
    LocalesStore
} from '../constants';

export const LocalesContext = createContext<LocalesStore>(LocalesStoreInitial);
export const LocalesDispatchContext = createContext<ReducerAction<Dispatch>>(undefined);

const LocalesProvider = ({
    children
}: ProviderProps) => {
    const [locales, setLocales]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
            ...state, ...newValue 
        }),
        LocalesStoreInitial
    );

    return <LocalesContext.Provider
        value={locales}
    >
        <LocalesDispatchContext.Provider
            value={setLocales}
        >
            {children}
        </LocalesDispatchContext.Provider>
    </LocalesContext.Provider>;
};
export default LocalesProvider;