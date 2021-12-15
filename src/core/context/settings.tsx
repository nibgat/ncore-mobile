import React, {
    createContext,
    useReducer
} from "react";
import {
    ProviderProps
} from "./types";
import {
    SettingsStoreInitial,
    SettingsStore
} from "../constants";

export const SettingsContext = createContext<SettingsStore>(SettingsStoreInitial);

const SettingsProvider = ({
    children
}: ProviderProps) => {
    const [settings] = useReducer(
        (state: SettingsStore, newValue: SettingsStore) => ({
            ...state, ...newValue
        }),
        SettingsStoreInitial
    );

    return <SettingsContext.Provider
        value={settings}
    >
        {children}
    </SettingsContext.Provider>;
};
export default SettingsProvider;