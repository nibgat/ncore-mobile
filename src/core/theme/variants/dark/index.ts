export const colors: NCore.Colors = {
    "primary":          "#00C2A0",
    "body":             "#f5f5f5",
    "constrastBody":    "#2a2a2a",
    "layer1":           "#141414",
    "layer2":           "#1F1F1F",
    "layer3":           "#292929",
    "warning":          "#EBD147",
    "danger":           "#EB7E47",
    "success":          "#7EEB47",
    "accent":           "#EB4747",
    "attention":        "#EB477E",
    "info":             "#4799EB",
    "gray0":            "hsl(0, 0%, 100%)",
    "gray10":           "hsl(0, 0%, 90%)",
    "gray20":           "hsl(0, 0%, 80%)",
    "gray30":           "hsl(0, 0%, 70%)",
    "gray40":           "hsl(0, 0%, 60%)",
    "gray50":           "hsl(0, 0%, 50%)",
    "gray60":           "hsl(0, 0%, 40%)",
    "gray70":           "hsl(0, 0%, 30%)",
    "gray80":           "hsl(0, 0%, 20%)",
    "gray90":           "hsl(0, 0%, 18%)",
    "gray92":           "hsl(0, 0%, 16%)",
    "gray94":           "hsl(0, 0%, 14%)",
    "gray96":           "hsl(0, 0%, 12%)",
    "gray98":           "hsl(0, 0%, 10%)",
    "gray100":          "hsl(0, 0%, 8%)",
    "modalBackground":  "rgba(0, 0, 0, 0.5)"
};

export const typography: NCore.Typography = {
    header1: {
        fontFamily: "Montserrat-Light",
        fontWeight: "300",
        lineHeight: 62.4,
        fontSize: 48
    },
    header2: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "400",
        lineHeight: 41.6,
        fontSize: 32
    },
    header3: {
        fontFamily: "Montserrat-Medium",
        fontWeight: "500",
        lineHeight: 31.2,
        fontSize: 26
    },
    header4: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "400",
        lineHeight: 26,
        fontSize: 22
    },
    header5: {
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "600",
        lineHeight: 26,
        fontSize: 22
    },
    header6: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "400",
        lineHeight: 23.4,
        fontSize: 18
    },
    header7: {
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "600",
        lineHeight: 23.4,
        fontSize: 18
    },
    header8: {
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "600",
        lineHeight: 20.8,
        fontSize: 14
    },
    header9: {
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "600",
        lineHeight: 20.8,
        fontSize: 12
    },
    body: {
        fontFamily: "Montserrat-Ragular",
        fontWeight: "400",
        lineHeight: 22.72,
        fontSize: 14
    },
    caption: {
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "600",
        letterSpacing: -0.5,
        lineHeight: 14.4,
        fontSize: 10
    },
    button: {
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "600",
        letterSpacing: 0.5,
        lineHeight: 22.72,
        fontSize: 14
    },
    overline: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: 2,
        fontSize: 12
    }
};

const theme: NCore.Theme = {
    key: "dark",
    typography,
    colors
};

export default theme;