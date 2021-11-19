import 

type BottomSheetConfigs = {
    animationsDuration: number;
};

type ThemeConfigs = {
    bottomSheet: BottomSheetConfigs;
};

export type ThemeStore = {
    initialConfigs: boolean;
    mergedTheme: () => void;
    switchTheme: () => void;
    changeTheme: () => void;
    configs: ThemeConfigs;
    mergeTheme: boolean;
    value: string;
    typographyScheme: ;
    typography: ;
    colors: ;
    styles: ;
    tokens: ;
};

const nCoreThemeStore: ThemeStore = {
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
export default nCoreThemeStore;