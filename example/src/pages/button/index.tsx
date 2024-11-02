import React, {
    Dispatch,
    useState
} from "react";
import {
    View
} from "react-native";
import {
    Button as NCoreButton,
    PageContainer,
    NCoreIconType,
    NCoreTheme
} from "ncore-mobile";
import stylesheet from "./stylesheet";
import {
    PhoneIcon,
    HomeIcon
} from "../../../assets/svgr";

type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";
type ButtonVariant = "filled" | "outline" | "ghost";
type ButtonSize = "small" | "medium" | "large";

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

const iconList: Array<{
    icon: NCoreIconType;
    name: string;
}> = [
    {
        name: "Home",
        icon: (props) => <HomeIcon
            {...props}
            size={22}
        />
    },
    {
        name: "Phone",
        icon: (props) => <PhoneIcon
            {...props}
            size={22}
        />
    }
];

const Button = () => {
    const [spreadBehaviour, setSpreadBehaviour]: [ButtonSpreadBehaviour | undefined, Dispatch<ButtonSpreadBehaviour | undefined>] = useState<ButtonSpreadBehaviour | undefined>(undefined);
    const [textColor, setTextColor]: [keyof NCore.ColorsType | undefined, Dispatch<keyof NCore.ColorsType | undefined>] = useState<keyof NCore.ColorsType | undefined>(undefined);
    const [iconColor, setIconColor]: [keyof NCore.ColorsType | undefined, Dispatch<keyof NCore.ColorsType | undefined>] = useState<keyof NCore.ColorsType | undefined>(undefined);
    const [color, setColor]: [keyof NCore.ColorsType | undefined, Dispatch<keyof NCore.ColorsType | undefined>] = useState<keyof NCore.ColorsType | undefined>(undefined);
    const [variant, setVariant]: [ButtonVariant | undefined, Dispatch<ButtonVariant | undefined>] = useState<ButtonVariant | undefined>(undefined);
    const [size, setSize]: [ButtonSize | undefined, Dispatch<ButtonSize | undefined>] = useState<ButtonSize | undefined>(undefined);
    const [isCustomLoading, setIsCustomLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [iconIndex, setIconIndex] = useState(0);

    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    return <PageContainer>
        <View
            style={stylesheet.contentContainer}
        >
            <NCoreButton
                onPress={() => {
                // @ts-ignore
                    alert("Action");
                }}
                icon={iconIndex === 0 ? undefined : iconList[iconIndex - 1]?.icon}
                spreadBehaviour={spreadBehaviour}
                isCustomLoading={isCustomLoading}
                disabled={isDisabled}
                iconColor={iconColor}
                textColor={textColor}
                loading={isLoading}
                variant={variant}
                title="Click Me"
                color={color}
                size={size}
            />
        </View>
        
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
        <NCoreButton
            title={`spreadBehaviour = ${spreadBehaviour ? spreadBehaviour : "None"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                if(!spreadBehaviour) {
                    setSpreadBehaviour("baseline");
                } else if(spreadBehaviour === "baseline") {
                    setSpreadBehaviour("free");
                } else if(spreadBehaviour === "free") {
                    setSpreadBehaviour("stretch");
                } else {
                    setSpreadBehaviour(undefined);
                }
            }}
        />
        <NCoreButton
            title={`color = ${color ? color : "None"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                const currentIndex = colorList.findIndex(e => e === color);

                if(currentIndex + 1 > colorList.length - 1) {
                    setColor(undefined);
                } else if(colorList[currentIndex + 1]) {
                    // @ts-ignore
                    setColor(colorList[currentIndex + 1]);
                } else {
                    // @ts-ignore
                    setColor(colorList[0]);
                }
            }}
        />
        <NCoreButton
            title={`textColor = ${textColor ? textColor : "None"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                const currentIndex = colorList.findIndex(e => e === textColor);

                if(currentIndex + 1 > colorList.length - 1) {
                    setTextColor(undefined);
                } else if(colorList[currentIndex + 1]) {
                    // @ts-ignore
                    setTextColor(colorList[currentIndex + 1]);
                } else {
                    // @ts-ignore
                    setTextColor(colorList[0]);
                }
            }}
        />
        <NCoreButton
            title={`iconColor = ${iconColor ? iconColor : "None"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                const currentIndex = colorList.findIndex(e => e === iconColor);

                if(currentIndex + 1 > colorList.length - 1) {
                    setIconColor(undefined);
                } else if(colorList[currentIndex + 1]) {
                    // @ts-ignore
                    setIconColor(colorList[currentIndex + 1]);
                } else {
                    // @ts-ignore
                    setIconColor(colorList[0]);
                }
            }}
        />
        <NCoreButton
            title={`icon = ${iconIndex === 0 ? "None" : iconList[iconIndex - 1]?.name} Icon`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                let tempIconIndex = iconIndex + 1;

                if(tempIconIndex > iconList.length) {
                    setIconIndex(0);
                } else {
                    setIconIndex(tempIconIndex);
                }
            }}
        />
        <NCoreButton
            title={`disabled = ${isDisabled ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsDisabled(!isDisabled);
            }}
        />
        <NCoreButton
            title={`loading = ${isLoading ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsLoading(!isLoading);
            }}
        />
        <NCoreButton
            title={`isCustomLoading = ${isCustomLoading ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsCustomLoading(!isCustomLoading);
            }}
        />
        <NCoreButton
            title={`variant = ${variant ? variant : "None"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                if(!variant) {
                    setVariant("filled");
                } else if(variant === "filled") {
                    setVariant("ghost");
                } else if(variant === "ghost") {
                    setVariant("outline");
                } else {
                    setVariant(undefined);
                }
            }}
        />
        <NCoreButton
            title={`size = ${size ? size : "None"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                if(!size) {
                    setSize("large");
                } else if(size === "large") {
                    setSize("medium");
                } else if(size === "medium") {
                    setSize("small");
                } else {
                    setSize(undefined);
                }
            }}
        />
    </PageContainer>;
};
export default Button;
