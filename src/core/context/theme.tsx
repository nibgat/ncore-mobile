import NCoreContext, {
    ConfigType
} from "ncore-context";
import light from "../theme/variants/light";
import dark from "../theme/variants/dark";
import {
    mergeGivenDesignTokensWithNCore,
    mergeGivenTypographyWithNCore,
    mergeGivenColorsWithNCore
} from "../theme";
import {
    ThemeContextType,
    ThemeType
} from "../../types";

class ThemeContextInheritance<T extends ThemeType> extends NCoreContext<ThemeContextType, ConfigType<ThemeContextType>> {
    themes: Array<NCore.ThemeType> = [
        light,
        dark
    ];

    constructor(initialState: T, config: ConfigType<ThemeContextType>) {
        super({
            activeTheme: light.key,
            ...light,
            ...light.designTokens
        }, config);

        this.prepare(initialState);
    }

    setTheme = (themeKey: NCore.ThemeKeyType) => {
        const currentProjectTheme = this.themes?.find(e => e.key === themeKey);

        if(themeKey !== "light" && themeKey !== "dark" && !(currentProjectTheme)) {
            throw Error(`Can not find a theme for the given themeKey: ${themeKey}`);
        }

        const _typography = mergeGivenTypographyWithNCore(themeKey, currentProjectTheme?.typography);
        const _colors = mergeGivenColorsWithNCore(themeKey, currentProjectTheme?.colors);
        const _designTokens = mergeGivenDesignTokensWithNCore(themeKey, currentProjectTheme?.designTokens);

        const newState = {
            activeTheme: themeKey,
            typography: _typography,
            colors: _colors,
            spaces: _designTokens.spaces,
            borders: _designTokens.borders,
            radiuses: _designTokens.radiuses,
            disabled: _designTokens.disabled
        };

        this.state = newState;
        this.setState(newState);
    };

    prepare = (initialState?: ThemeType) => {
        if(initialState && initialState.themes) {
            this.themes = initialState.themes;
        }

        if(initialState && initialState.initialThemeKey) {
            this.setTheme(initialState.initialThemeKey);
            return;
        }

        this.setTheme("light");
    };
};
export default ThemeContextInheritance;
