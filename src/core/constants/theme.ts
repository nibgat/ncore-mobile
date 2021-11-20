import lightTheme from '../theme/variants/light';

type BottomSheetConfigs = {
    animationsDuration: number;
};

type ThemeConfigs = {
    bottomSheet: BottomSheetConfigs;
};

export type ThemeStore = {
    initialConfigs: boolean;
    switchTheme: () => void;
    changeTheme: () => void;
    mergeTheme: () => void;
    configs: ThemeConfigs;
    mergedTheme: boolean;
    value: string;
    typographyScheme: ;
    typography: ;
    colors: ;
    styles: ;
    tokens: ;
};

const themeStore: ThemeStore = {
    typographyScheme: lightTheme.typographyScheme,
    typography: lightTheme.typography,
    colors: lightTheme.palette,
    tokens: lightTheme.tokens,
    initialConfigs: false,
    switchTheme: () => {},
    changeTheme: () => {},
    mergeTheme: () => {},
    mergedTheme: false,
    value: "light",
    configs: {
        bottomSheet: {
            animationsDuration: 150
        }
    },
    styles: {
    }
};
export default themeStore;