import light from "../variants/light";
import dark from "../variants/dark";

const themes: Array<Required<NCore.ThemeType>> = [light, dark];

export const mergeGivenTypographyWithNCore = (themeKey: NCore.ThemeKeyType, customTypography: NCore.TypographyType | undefined): NCore.TypographyType => {
    const defaultThemeTypography = themes.find(e => e.key === themeKey)?.typography ?? light.typography;

    if(!(customTypography)) {
        return defaultThemeTypography;
    }

    return {
        ...defaultThemeTypography,
        ...customTypography
    };
};

export const mergeGivenColorsWithNCore = (themeKey: NCore.ThemeKeyType, customColors: NCore.ColorsType | undefined): NCore.ColorsType => {
    const defaultThemeColors = themes.find(e => e.key === themeKey)?.colors ?? light.colors;

    if(!(customColors)) {
        return defaultThemeColors;
    }

    return {
        ...defaultThemeColors,
        ...customColors
    };
};

export const mergeGivenDesignTokensWithNCore = (themeKey: NCore.ThemeKeyType, customDesignTokens: NCore.DesignTokensType | undefined): Required<NCore.DesignTokensType> => {
    const defaultThemeDesignTokens = themes.find(e => e.key === themeKey)?.designTokens ?? light.designTokens;

    if(!(customDesignTokens)) {
        return defaultThemeDesignTokens;
    }

    const spaces: NCore.SpacesTokensType = {
        ...defaultThemeDesignTokens.spaces,
        ...customDesignTokens.spaces ?? defaultThemeDesignTokens.spaces
    };

    const borders: NCore.BordersTokensType = {
        ...defaultThemeDesignTokens.borders,
        ...customDesignTokens.borders ?? defaultThemeDesignTokens.borders
    };

    const radiuses: NCore.RadiusesTokensType = {
        ...defaultThemeDesignTokens.radiuses,
        ...customDesignTokens.radiuses ?? defaultThemeDesignTokens.radiuses
    };

    const disabled: NCore.DisabledTokensType = {
        ...defaultThemeDesignTokens.disabled,
        ...customDesignTokens.disabled ?? defaultThemeDesignTokens.disabled
    };

    return {
        spaces,
        borders,
        radiuses,
        disabled
    };
};
