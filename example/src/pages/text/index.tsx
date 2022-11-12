import React, {
    useEffect,
    useState
} from "react";
import {
    View
} from "react-native";
import {
    useNCoreLocalization,
    Text as NCoreText,
    PageContainer,
    useNCoreTheme,
    Button,
    Header
} from "ncore-mobile";
import {
    useNavigation 
} from "@react-navigation/native";
import {
    typography,
    colors
} from "../../../../src/core/theme/variants/dark";
import stylesheet from "./stylesheet";

// @ts-ignore
const TYPES: Array<keyof NCore.Typography> = Object.keys(typography);

// @ts-ignore
const COLORS: Array<keyof NCore.Colors> = Object.keys(colors);

const Text = () => {
    const navigation = useNavigation();

    const {
        spaces
    } = useNCoreTheme();

    const {
        localize
    } = useNCoreLocalization();

    const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                onBack={() => navigation.goBack()}
                title={localize("textTypo")}
            />
        });
    });

    return <PageContainer>
        <View
            style={stylesheet.titleContainer}
        >
            <NCoreText
                variant={TYPES[currentTypeIndex]}
                color={COLORS[currentColorIndex]}
                style={{
                    marginBottom: spaces.content * 4
                }}
            >
                {localize("textForTextComponent")}.
            </NCoreText>
        </View>
        <Button
            title={`variant: ${TYPES[currentTypeIndex]}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentTypeIndex(currentTypeIndex === TYPES.length - 1 ? 0 : currentTypeIndex + 1);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <Button
            title={`color: ${COLORS[currentColorIndex]}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentColorIndex(currentColorIndex === COLORS.length - 1 ? 0 : currentColorIndex + 1);
            }}
        />
    </PageContainer>;
};
export default Text;
