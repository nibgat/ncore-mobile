import React, {
    ReducerAction,
    createContext,
    useReducer
} from "react";
import {
    NCoreReducerDispatch,
    ProviderProps
} from "./types";
import {
    SettingsStoreInitial,
    SettingsStore
} from "../constants";

export const SettingsContext = createContext<SettingsStore>(SettingsStoreInitial);
export const SettingsDispatchContext = createContext<ReducerAction<NCoreReducerDispatch>>(undefined);

const SettingsProvider = ({
    children
}: ProviderProps) => {
    const [settings, setSettings] = useReducer(
        (state: SettingsStore, newValue: SettingsStore) => ({
            ...state, ...newValue
        }),
        SettingsStoreInitial
    );

    return <SettingsContext.Provider
        value={settings}
    >
        <SettingsDispatchContext.Provider
            value={setSettings}
        >
            {children}
        </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>;
};
export default SettingsProvider;