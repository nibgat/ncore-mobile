import React, {
    Dispatch,
    useState
} from "react";
import {
    View
} from "react-native";
import {
    Text as NCoreText,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";
import stylesheet from "./stylesheet";

const variants: Array<keyof NCore.TypographyType> = [
    "buttonMedium",
    "buttonLarge",
    "buttonSmall",
    "overline",
    "header1",
    "header2",
    "header3",
    "header4",
    "header5",
    "header6",
    "header7",
    "header8",
    "header9",
    "caption",
    "body"
];

const colorList: Array<keyof NCore.ColorsType> = [
    "constrastBody",
    "attention",
    "hideBody",
    "primary",
    "success",
    "warning",
    "accent",
    "danger",
    "body",
    "info"
];

const Text = () => {
    const [variant, setVariant]: [keyof NCore.TypographyType, Dispatch<keyof NCore.TypographyType>] = useState<keyof NCore.TypographyType>("header1");
    const [color, setColor]: [keyof NCore.ColorsType, Dispatch<keyof NCore.ColorsType>] = useState<keyof NCore.ColorsType>("primary");
    const [value] = useState("Test Text");

    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    return <PageContainer>
        <NCoreText
            variant={variant}
            color={color}
        >
            {value}
        </NCoreText>
        
        <View
            style={[
                stylesheet.seperator,
                {
                    backgroundColor: colors.seperator,
                    marginBottom: spaces.content * 2,
                    marginTop: spaces.content * 2
                }
            ]}
        />

        <Button
            title={`variant = ${variant}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                const currentIndex = variants.findIndex(e => e === variant);

                if(variants[currentIndex + 1]) {
                    // @ts-ignore
                    setVariant(variants[currentIndex + 1]);
                } else {
                    // @ts-ignore
                    setVariant(variants[0]);
                }
            }}
        />
        <Button
            title={`color = ${color}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                const currentIndex = colorList.findIndex(e => e === color);

                if(colorList[currentIndex + 1]) {
                    // @ts-ignore
                    setColor(colorList[currentIndex + 1]);
                } else {
                    // @ts-ignore
                    setColor(colorList[0]);
                }
            }}
        />
    </PageContainer>;
};
export default Text;
