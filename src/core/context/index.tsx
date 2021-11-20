import React, {
    useContext
} from 'react';
import {
    ProviderProps
} from './types';
import ModalProvider, {
    ModalDispatchContext,
    ModalContext
} from './modal';
import SettingsProvider, {
    SettingsDispatchContext,
    SettingsContext
} from './settings';
import LocalesProvider, {
    LocalesDispatchContext,
    LocalesContext
} from './locales';
import BottomSheetProvider, {
    BottomSheetDispatchContext,
    BottomSheetContext
} from './bottomSheet';
import ThemeProvider, {
    ThemeDispatchContext,
    ThemeContext
} from './theme';

const Context = ({
    children
}: ProviderProps) => {
    return (
        <ThemeProvider>
            <ModalProvider>
                <BottomSheetProvider>
                    <LocalesProvider>
                        <SettingsProvider>
                            {children}
                        </SettingsProvider>
                    </LocalesProvider>
                </BottomSheetProvider>
            </ModalProvider>
        </ThemeProvider>
    );
};

export const useNCoreTheme = () => [
    useContext(ThemeContext),
    useContext(ThemeDispatchContext)
];

export const useNCoreModal = () => [
    useContext(ModalContext),
    useContext(ModalDispatchContext)
];

export const useNCoreBottomSheet = () => [
    useContext(BottomSheetContext),
    useContext(BottomSheetDispatchContext)
];

export const useNCoreLocales = () => [
    useContext(LocalesContext),
    useContext(LocalesDispatchContext)
];

export const useNCoreSettings = () => [
    useContext(SettingsContext),
    useContext(SettingsDispatchContext)
];

export default Context;