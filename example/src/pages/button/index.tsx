import React, {
    useEffect,
    useState
} from "react";
import {
    View
} from "react-native";
import {
    Button as NCoreButton,
    useNCoreLocalization,
    PageContainer,
    useNCoreTheme,
    Header
} from "ncore-mobile";
import {
    useNavigation 
} from "@react-navigation/native";
import stylesheet from "./stylesheet";
import {
    colors
} from "../../../../src/core/theme/variants/dark";
import SvgTest from "../../assets/svg/Test";

const SPREADBEHAVIOUR_TYPES: Array<"baseline" | "stretch" | "free"> = [
    "baseline",
    "stretch",
    "free"
];

const VARIANTS: Array<"outline" | "filled" | "ghost"> = [
    "outline",
    "filled",
    "ghost"
];

const SIZE_VARIANTS: Array<"small" | "medium" | "large"> = [
    "small",
    "medium",
    "large"
];

// @ts-ignore
const COLORS: Array<keyof NCore.Colors> = Object.keys(colors);

const Button = () => {
    const navigation = useNavigation();

    const {
        localize
    } = useNCoreLocalization();

    const {
        colors,
        spaces
    } = useNCoreTheme();

    const [currentSpreadBehaviourIndex, setCurrentSpreadBehaviourIndex] = useState(0);
    const [currentDisabledStatus, setCurrentDisabledStatus] = useState(false);
    const [currentLoadingStatus, setCurrentLoadingStatus] = useState(false);
    const [currentTextColorIndex, setCurrentTextColorIndex] = useState(0);
    const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
    const [currentIconStatus, setCurrentIconStatus] = useState(false);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [currentSizeIndex, setCurrentSizeIndex] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                onBack={() => navigation.goBack()}
                title={localize("button")}
            />
        });
    });

    return <PageContainer>
        <View
            style={[
                stylesheet.buttonAreaContainer
            ]}
        >
            <NCoreButton
                title="Button"
                spreadBehaviour={SPREADBEHAVIOUR_TYPES[currentSpreadBehaviourIndex]}
                variant={VARIANTS[currentVariantIndex]}
                color={COLORS[currentColorIndex]}
                textColor={currentTextColorIndex === 0 ? undefined : COLORS[currentTextColorIndex - 1]}
                size={SIZE_VARIANTS[currentSizeIndex]}
                disabled={currentDisabledStatus}
                loading={currentLoadingStatus}
                icon={currentIconStatus ? ({
                    color,
                    size
                }) => <SvgTest
                    color={color}
                    size={size}
                /> : undefined}
                onPress={() => {
                    // @ts-ignore
                    alert("Button");
                }}
            />
        </View>
        <NCoreButton
            title={`spreadBehaviour: ${SPREADBEHAVIOUR_TYPES[currentSpreadBehaviourIndex]}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentSpreadBehaviourIndex(currentSpreadBehaviourIndex === SPREADBEHAVIOUR_TYPES.length - 1 ? 0 : currentSpreadBehaviourIndex + 1);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <NCoreButton
            title={`variant: ${VARIANTS[currentVariantIndex]}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentVariantIndex(currentVariantIndex === VARIANTS.length - 1 ? 0 : currentVariantIndex + 1);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <NCoreButton
            title={`color: ${COLORS[currentColorIndex]}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentColorIndex(currentColorIndex === COLORS.length - 1 ? 0 : currentColorIndex + 1);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <NCoreButton
            title={`textColor: ${currentTextColorIndex === 0 ? "Empty" : COLORS[currentTextColorIndex]}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentTextColorIndex(currentTextColorIndex === COLORS.length - 1 ? 0 : currentTextColorIndex + 1);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <NCoreButton
            title={`size: ${SIZE_VARIANTS[currentSizeIndex]}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentSizeIndex(currentSizeIndex === SIZE_VARIANTS.length - 1 ? 0 : currentSizeIndex + 1);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <NCoreButton
            title={`disabled: ${currentDisabledStatus ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentDisabledStatus(!currentDisabledStatus);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <NCoreButton
            title={`loading: ${currentLoadingStatus ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentLoadingStatus(!currentLoadingStatus);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <NCoreButton
            title={`icon: ${currentIconStatus ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentIconStatus(!currentIconStatus);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
    </PageContainer>;
};
export default Button;
