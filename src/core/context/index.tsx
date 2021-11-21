import React, {
    useContext,
    ReactNode
} from 'react';
import ModalProvider, {
    ModalContext
} from './modal';
import SettingsProvider, {
    SettingsContext
} from './settings';
import LocalesProvider, {
    LocalesDispatchContext,
    LocalesContext
} from './locales';
import BottomSheetProvider, {
    BottomSheetContext
} from './bottomSheet';
import ThemeProvider, {
    ThemeDispatchContext,
    ThemeContext
} from './theme';
import {
    useNCoreSettingsReturnType,
    nCoreBottomSheetReturnType,
    useNCoreModalReturnType
} from '../constants';

type Context = {
    children: ReactNode;
    themes: Array<NCore.Theme>;
};

const Context = ({
    children,
    themes
}: Context) => {
    return <ThemeProvider themes={themes}>
        <ModalProvider>
            <BottomSheetProvider>
                <LocalesProvider>
                    <SettingsProvider>
                        {children}
                    </SettingsProvider>
                </LocalesProvider>
            </BottomSheetProvider>
        </ModalProvider>
    </ThemeProvider>;
};

export const useNCoreTheme = () => [
    useContext(ThemeContext),
    useContext(ThemeDispatchContext)
];

export const useNCoreModal = (): useNCoreModalReturnType => useContext(ModalContext);

export const useNCoreBottomSheet = (): nCoreBottomSheetReturnType => useContext(BottomSheetContext);

export const useNCoreLocales = () => [
    useContext(LocalesContext),
    useContext(LocalesDispatchContext)
];

export const useNCoreSettings = (): useNCoreSettingsReturnType => useContext(SettingsContext);

export default Context;