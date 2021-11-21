import lightTheme from '../theme/variants/light';

type ThemeKey = "light" | "dark" | string;

export type ThemeStore = {
    switchTheme: (themeKey: ThemeKey) => void;
    activeTheme: string;
};

const themeStore: ThemeStore = {
    designTokens: lightTheme.designTokens,
    typography: lightTheme.typography,
    colors: lightTheme.palette,
    switchTheme: () => {},
    activeTheme: "light"
};
export default themeStore;