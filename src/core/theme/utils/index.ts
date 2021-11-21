import designTokens from "../designTokens";
import light from "../variants/light";
import dark from "../variants/dark";

const themes: Array<NCore.Theme> = [light, dark];

export const mergeGivenTypographyWithNCore = (themeKey: NCore.ThemeKey, customTypography: NCore.Typography | undefined): NCore.Typography => {
    const lightThemeTypography = themes[0].typography as Required<NCore.Typography>;

    if(!(customTypography)) {
        return lightThemeTypography;
    }

    const defaultThemeTypography = themes.find(e => e.key === themeKey)?.typography ?? lightThemeTypography;

    return {
        ...defaultThemeTypography,
        ...customTypography
    };
};

export const mergeGivenColorsWithNCore = (themeKey: NCore.ThemeKey, customColors: NCore.Colors | undefined): NCore.Colors => {
    const lightThemeColors = themes[0].colors as Required<NCore.Colors>;

    if(!(customColors)) {
        return lightThemeColors;
    }

    const defaultThemeColors = themes.find(e => e.key === themeKey)?.colors ?? lightThemeColors;

    return {
        ...defaultThemeColors,
        ...customColors
    };
};

export const mergeGivenDesignTokensWithNCore = (customDesignTokens: NCore.DesignTokens | undefined): NCore.DesignTokens => {
    if(!(customDesignTokens)) {
        return designTokens;
    }

    const spaces: NCore.SpacesTokens = {
        ...designTokens.spaces,
        ...customDesignTokens.spaces ?? designTokens.spaces
    };

    const borders: NCore.BordersTokens = {
        ...designTokens.borders,
        ...customDesignTokens.borders ?? designTokens.borders
    };

    const radiuses: NCore.RadiusesTokens = {
        ...designTokens.radiuses,
        ...customDesignTokens.radiuses ?? designTokens.radiuses
    };

    const disabled: NCore.DisabledTokens = {
        ...designTokens.disabled,
        ...customDesignTokens.disabled ?? designTokens.disabled
    };

    return {
        spaces,
        borders,
        radiuses,
        disabled
    };
};