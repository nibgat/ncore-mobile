import React, {
    ReducerAction,
    createContext,
    useReducer,
    ReactNode,
    useEffect,
    Dispatch
} from "react";
import {
    NCoreReducerDispatch
} from "./types";
import {
    LocalesStoreInitial,
    LocalesStore
} from "../constants";
import {
    LocalesStoreReducer 
} from "../constants/locales";

export const LocalesContext = createContext<LocalesStore>(LocalesStoreInitial);
export const LocalesDispatchContext = createContext<ReducerAction<NCoreReducerDispatch>>(undefined);

type LocalesProvider = {
    children: ReactNode;
    locales?: Array<Record<string, string>>
};

const LocalesProvider = ({
    children,
    locales
}: LocalesProvider) => {
    const [_locales, _setLocales]: [LocalesStoreReducer, Dispatch<LocalesStoreReducer>] = useReducer(
        (state: LocalesStoreReducer, newValue: LocalesStoreReducer) => ({
            ...state, ...newValue
        }),
        LocalesStoreInitial
    );

    useEffect(() => {
        if(locales && locales.length) {
            _setLocales({
                data: locales[0]
            });
        }
    }, [locales]);

    return <LocalesContext.Provider
        value={_locales}
    >
        <LocalesDispatchContext.Provider
            value={_setLocales}
        >
            {children}
        </LocalesDispatchContext.Provider>
    </LocalesContext.Provider>;
};
export default LocalesProvider;