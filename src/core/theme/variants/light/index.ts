export const palette = {
    "primary":          "#00C2A0",
    "body":             "#2a2a2a",
    "constrastBody":    "#F5F5F5",
    "layer1":           "#E5E5E5",
    "layer2":           "#F2F2F2",
    "layer3":           "#FAFAFA",
    "warning":          "#EBD147",
    "danger":           "#EB7E47",
    "success":          "#7EEB47",
    "accent":           "#EB4747",
    "attention":        "#EB477E",
    "info":             "#4799EB",
    "gray0":            "hsl(0, 0%, 0%)",
    "gray10":           "hsl(0, 0%, 10%)",
    "gray20":           "hsl(0, 0%, 20%)",
    "gray30":           "hsl(0, 0%, 30%)",
    "gray40":           "hsl(0, 0%, 40%)",
    "gray50":           "hsl(0, 0%, 50%)",
    "gray60":           "hsl(0, 0%, 60%)",
    "gray70":           "hsl(0, 0%, 70%)",
    "gray80":           "hsl(0, 0%, 80%)",
    "gray90":           "hsl(0, 0%, 90%)",
    "gray92":           "hsl(0, 0%, 92%)",
    "gray94":           "hsl(0, 0%, 94%)",
    "gray96":           "hsl(0, 0%, 96%)",
    "gray98":           "hsl(0, 0%, 98%)",
    "gray100":          "hsl(0, 0%, 100%)",
    "modalBackground":  "rgba(0, 0, 0, 0.5)"
};

export const tokens = {
    spaces: {
        container: 20,
        content: 8,
        inline: 4,
        item: 20
    },
    borders: {
        indicator: 2,
        line: 1
    },
    radiuses: {
        quarter: 5,
        hard: 20,
        half: 10
    },
    disabled: {
        opacity: 0.33
    }
};

export const typographyScheme = {
    "type": "value", // or "number"
    "normal": {
        "100": "Montserrat-Thin",
        "200": "Montserrat-ExtraLight",
        "300": "Montserrat-Light",
        "400": "Montserrat-Regular",
        "500": "Montserrat-Medium",
        "600": "Montserrat-SemiBold",
        "700": "Montserrat-Bold",
        "800": "Montserrat-ExtraBold",
        "900": "Montserrat-Black"
    },
    "italic": {
        "100": "Montserrat-Thin",
        "200": "Montserrat-ExtraLightItalic",
        "300": "Montserrat-LightItalic",
        "400": "Montserrat-Italic",
        "500": "Montserrat-MediumItalic",
        "600": "Montserrat-SemiBoldItalic",
        "700": "Montserrat-BoldItalic",
        "800": "Montserrat-ExtraBoldItalic",
        "900": "Montserrat-BlackItalic"
    }
};

export const typography = {
    header1: {
        family: "Montserrat",
        fontWeight: "300",
        tokens: {
            lineHeight: 62.4,
            fontSize: 48
        }
    },
    header2: {
        family: "Montserrat",
        fontWeight: "400",
        tokens: {
            lineHeight: 41.6,
            fontSize: 32
        }
    },
    header3: {
        family: "Montserrat",
        fontWeight: "500",
        tokens: {
            lineHeight: 31.2,
            fontSize: 26
        }
    },
    header4: {
        family: "Montserrat",
        fontWeight: "400",
        tokens: {
            lineHeight: 26,
            fontSize: 22
        }
    },
    header5: {
        family: "Montserrat",
        fontWeight: "600",
        tokens: {
            lineHeight: 26,
            fontSize: 22
        }
    },
    header6: {
        family: "Montserrat",
        fontWeight: "400",
        tokens: {
            lineHeight: 23.4,
            fontSize: 18
        }
    },
    header7: {
        family: "Montserrat",
        fontWeight: "600",
        tokens: {
            lineHeight: 23.4,
            fontSize: 18
        }
    },
    header8: {
        family: "Montserrat",
        fontWeight: "600",
        tokens: {
            lineHeight: 20.8,
            fontSize: 14
        }
    },
    header9: {
        family: "Montserrat",
        fontWeight: "600",
        tokens: {
            lineHeight: 20.8,
            fontSize: 12
        }
    },
    body: {
        family: "Montserrat",
        fontWeight: "400",
        tokens: {
            lineHeight: 22.72,
            fontSize: 14
        }
    },
    caption: {
        family: "Montserrat",
        fontWeight: "600",
        tokens: {
            letterSpacing: -0.5,
            lineHeight: 14.4,
            fontSize: 10
        }
    },
    button: {
        family: "Montserrat",
        fontWeight: "600",
        tokens: {
            letterSpacing: 0.5,
            lineHeight: 22.72,
            fontSize: 14
        }
    },
    overline: {
        family: "Montserrat",
        fontWeight: "400",
        tokens: {
            textTransform: "uppercase",
            letterSpacing: 2,
            fontSize: 12
        }
    }
};

const theme = {
    typographyScheme,
    typography,
    palette,
    tokens
};

export default theme;