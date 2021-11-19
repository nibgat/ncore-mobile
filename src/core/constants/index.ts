import {
    Platform
} from 'react-native';
import lightTheme from '../theme/variants/light';
import trTR from '../locales/variants/tr.json';

export { default as settingsStoreInitial } from './settings';

export const DEFAULT_NCORE_THEME_STORE = {
    value: "light",
    styles: {
    },
    colors: lightTheme.palette,
    configs: {
        bottomSheet: {
            animationsDuration: 150
        }
    },
    typographyScheme: lightTheme.typographyScheme,
    typography: lightTheme.typography,
    tokens: lightTheme.tokens,
    initialConfigs: false,
    mergedTheme: false,
    switchTheme: () => {},
    changeTheme: () => {},
    mergeTheme: () => {}
};

export const DEFAULT_NCORE_MODAL_STORE = {
    data: [],
    openModal: () => { },
    closeModal: () => { },
    closeAllModals: () => { }
};

export const DEFAULT_NCORE_BOTTOM_SHEET_STORE = {
    snapPoints: ["0%", Platform.OS === "ios" ? "25%" : "32%", "100%"],
    closeBottomSheet: () => { },
    openBottomSheet: () => { },
    snapTo: () => { },
    isActive: false,
    configs: {
        closeOnOverlayTap: true,
    /*
        swipeToTopEnabled: true,
        scrollEnabled: true,
        swipeEnabled: true,
        cancelable: true,
        withModal: false,
        draglink: {
        }
    */
    },
    data: null,
    index: 0
};

export const DEFAULT_NCORE_LOCALES = {
    mergeLocales: () => {},
    initialConfigs: false,
    mergedLocales: false,
    value: "trTR",
    data: trTR
};