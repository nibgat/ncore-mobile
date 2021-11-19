import React, {
    createContext,
    useContext,
    useReducer
} from 'react';
import {
    DEFAULT_NCORE_BOTTOM_SHEET_STORE,
    DEFAULT_NCORE_MODAL_STORE,
    DEFAULT_NCORE_THEME_STORE,
    DEFAULT_NCORE_LOCALES
} from '../constants';
import {
    settingsStoreInitial
} from '../constants';

const NCoreThemeContext = createContext(DEFAULT_NCORE_THEME_STORE);
const NCoreThemeDispatchContext = createContext(undefined);

const NCoreModalContext = createContext(DEFAULT_NCORE_MODAL_STORE);
const NCoreModalDispatchContext = createContext(undefined);

const NCoreBottomSheetContext = createContext(DEFAULT_NCORE_BOTTOM_SHEET_STORE);
const NCoreBottomSheetDispatchContext = createContext(undefined);

const NCoreLocalesContext = createContext(DEFAULT_NCORE_LOCALES);
const NCoreLocalesDispatchContext = createContext(undefined);

const NCoreSettingsContext = createContext(settingsStoreInitial);
const NCoreSettingsDispatchContext = createContext(undefined);

const NCoreContext = ({
    children
}: any) => {
    const [theme, setTheme]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
            ...state, ...newValue 
        }),
        DEFAULT_NCORE_THEME_STORE
    );

    const [nCoreModal, setNCoreModal]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
            ...state, ...newValue 
        }),
        DEFAULT_NCORE_MODAL_STORE
    );

    const [nCoreBottomSheet, setNCoreBottomSheet]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
            ...state, ...newValue 
        }),
        DEFAULT_NCORE_BOTTOM_SHEET_STORE
    );

    const [nCoreLocales, setNCoreLocales]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
            ...state, ...newValue 
        }),
        DEFAULT_NCORE_LOCALES
    );

    const [nCoreSettings, setNCoreSettings]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
            ...state, ...newValue 
        }),
        DEFAULT_NCORE_SETTINGS_STORE
    );

    return (
        <NCoreThemeContext.Provider
            value={theme}
        >
            <NCoreThemeDispatchContext.Provider
                value={setTheme}
            >
                <NCoreModalContext.Provider
                    value={nCoreModal}
                >
                    <NCoreModalDispatchContext.Provider
                        value={setNCoreModal}
                    >
                        <NCoreBottomSheetContext.Provider
                            value={nCoreBottomSheet}
                        >
                            <NCoreBottomSheetDispatchContext.Provider
                                value={setNCoreBottomSheet}
                            >
                                <NCoreLocalesContext.Provider
                                    value={nCoreLocales}
                                >
                                    <NCoreLocalesDispatchContext.Provider
                                        value={setNCoreLocales}
                                    >
                                        <NCoreSettingsContext.Provider
                                            value={nCoreSettings}
                                        >
                                            <NCoreSettingsDispatchContext.Provider
                                                value={setNCoreSettings}
                                            >
                                                {children}
                                            </NCoreSettingsDispatchContext.Provider>
                                        </NCoreSettingsContext.Provider>
                                    </NCoreLocalesDispatchContext.Provider>
                                </NCoreLocalesContext.Provider>
                            </NCoreBottomSheetDispatchContext.Provider>
                        </NCoreBottomSheetContext.Provider>
                    </NCoreModalDispatchContext.Provider>
                </NCoreModalContext.Provider>
            </NCoreThemeDispatchContext.Provider>
        </NCoreThemeContext.Provider>
    );
};

export const useNCoreTheme = () => [
    useContext(NCoreThemeContext),
    useContext(NCoreThemeDispatchContext)
];

export const useNCoreModal = () => [
    useContext(NCoreModalContext),
    useContext(NCoreModalDispatchContext)
];

export const useNCoreBottomSheet = () => [
    useContext(NCoreBottomSheetContext),
    useContext(NCoreBottomSheetDispatchContext)
];

export const useNCoreLocales = () => [
    useContext(NCoreLocalesContext),
    useContext(NCoreLocalesDispatchContext)
];

export const useNCoreSettings = () => [
    useContext(NCoreSettingsContext),
    useContext(NCoreSettingsDispatchContext)
];

export default NCoreContext;