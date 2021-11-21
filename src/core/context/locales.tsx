import React, {
    ReducerAction,
    createContext,
    useReducer
} from 'react';
import {
    NCoreReducerDispatch,
    ProviderProps
} from './types';
import {
    LocalesStoreInitial,
    LocalesStore
} from '../constants';

export const LocalesContext = createContext<LocalesStore>(LocalesStoreInitial);
export const LocalesDispatchContext = createContext<ReducerAction<NCoreReducerDispatch>>(undefined);

const LocalesProvider = ({
    children
}: ProviderProps) => {
    const [locales, setLocales] = useReducer(
        (state: LocalesStore, newValue: LocalesStore) => ({
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