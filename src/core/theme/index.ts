import light from './variants/light';
import dark from './variants/dark';

const themes: any = {
    light,
    dark
};

const typographySchemeConstant = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
];

export const generateWithMergeColors = (selectedTheme: string, mergeColors: any) => {
    const themeNames = Object.keys(themes);
    const _selectedTheme = themeNames.indexOf(selectedTheme) === -1 ? themeNames[0] : selectedTheme;

    let result = themes[_selectedTheme].palette;

    result.constrastBody = result.gray98;
    result.buttonText = result.gray98;
    result.seperator = result.gray80;
    result.hideText = result.gray60;
    result.panel = result.layer2;
    result.body = result.gray10;

    if(mergeColors) {
        const mergeColorsKeys = Object.keys(mergeColors);
        for(let i = 0; i < mergeColorsKeys.length; i++) {
            if(typeof mergeColors[mergeColorsKeys[i]] !== "string") return result;
        }

        result = {
            ...result,
            ...mergeColors
        };
    }

    return result;
};

export const generateWithMergeTokens = (selectedTheme: string, mergeTokens: any) => {
    const initialTokens = themes[selectedTheme] ? themes[selectedTheme].tokens : themes.light.tokens;
    if(mergeTokens === undefined || mergeTokens === null) return initialTokens;
    
    let isValidMergeTokens = true;
    
    Object.entries(mergeTokens).forEach(([_, parentValue]: [any, any]) => {
        Object.entries(parentValue).forEach(([_, value]) => {
            if(!(typeof value === 'string' || typeof value === 'number')) isValidMergeTokens = false;
        });
    });

    if(!isValidMergeTokens) return initialTokens;

    const initialTokensKeys = Object.keys(initialTokens);
    const mergeTokensKeys = Object.keys(mergeTokens);

    const keys = [...new Set([...initialTokensKeys, ...mergeTokensKeys])];

    let mergedTokens: any = {
    };
    keys.forEach(key => {
        if(mergeTokens[key]) {
            mergedTokens[key] = {
                ...initialTokens[key],
                ...mergedTokens[key]
            };
        } else {
            mergedTokens[key] = initialTokens[key];
        }
    });
    return mergedTokens;
};

export const generateWithMergeTypography = (selectedTheme: string, mergeTypography: any) => {
    const initialTypography = themes[selectedTheme] ? themes[selectedTheme].typography : themes.light.typography;
    if(mergeTypography === undefined || mergeTypography === null) return initialTypography;

    let mergedTypography = JSON.parse(JSON.stringify(initialTypography));

    try {
        const mergeTypographyKeys = Object.keys(mergeTypography);
        mergeTypographyKeys.forEach(item => {
            if(mergeTypography[item].family) mergedTypography[item].family = mergeTypography[item].family;
            if(mergeTypography[item].tokens) mergedTypography[item].tokens = {
                ...mergedTypography[item].tokens,
                ...mergeTypography[item].tokens
            };
        });

        return mergedTypography;
    } catch(e) {
        return initialTypography;
    }
};

export const generateWithMergeTypographyScheme = (selectedTheme: string, mergeTypographyScheme: any) => {
    const initialTypographyScheme = themes[selectedTheme] ? themes[selectedTheme].typographyScheme : themes.light.typographyScheme;
    if(mergeTypographyScheme === undefined || mergeTypographyScheme === null) return initialTypographyScheme;

    try {
        let newTypographyScheme: any = {
            type: mergeTypographyScheme ? mergeTypographyScheme.type : initialTypographyScheme.type,
            italic: {
            },
            normal: {
            }
        };

        typographySchemeConstant.forEach(item => {
            newTypographyScheme["italic"][item] = mergeTypographyScheme["italic"][item] ? mergeTypographyScheme["italic"][item] : initialTypographyScheme["italic"][item];
        });
        typographySchemeConstant.forEach(item => {
            newTypographyScheme["normal"][item] = mergeTypographyScheme["normal"][item] ? mergeTypographyScheme["normal"][item] : initialTypographyScheme["normal"][item];
        });

        return newTypographyScheme;
    } catch(e: any) {
        console.error(e.message);
        return initialTypographyScheme;
    }
};

const generateTheme = (selectedTheme: string, mergeData: any) => {
    let mergeConfigs = {
        typographyScheme: undefined,
        typography: undefined,
        palette: undefined,
        tokens: undefined
    };

    if(mergeData) {
        if(mergeData.typographyScheme) mergeConfigs.typographyScheme = mergeData.typographyScheme;
        if(mergeData.typography) mergeConfigs.typography = mergeData.typography;
        if(mergeData.palette) mergeConfigs.palette = mergeData.palette;
        if(mergeData.tokens) mergeConfigs.tokens = mergeData.tokens;
    }

    const typographyScheme = generateWithMergeTypographyScheme(selectedTheme, mergeConfigs.typographyScheme);
    const typography = generateWithMergeTypography(selectedTheme, mergeConfigs.typography);
    const palette = generateWithMergeColors(selectedTheme, mergeConfigs.palette);
    const tokens = generateWithMergeTokens(selectedTheme, mergeConfigs.tokens);

    return {
        typographyScheme,
        colors: palette,
        typography,
        tokens
    };
};
export default generateTheme;