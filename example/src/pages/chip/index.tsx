import React, {
    Dispatch,
    useState
} from "react";
import {
    View
} from "react-native";
import stylesheet from "./stylesheet";
import {
    Chip as NCoreChip,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";
import {
    HomeIcon 
} from "../../../assets/svgr";

export type ChipSpreadBehaviour = "baseline" | "stretch" | "free";

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

const Chip = () => {
    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [spreadBehaviour, setSpreadBehaviour]: [ChipSpreadBehaviour | undefined, Dispatch<ChipSpreadBehaviour | undefined>] = useState<ChipSpreadBehaviour | undefined>(undefined);
    const [titleColor, setTitleColor]: [keyof NCore.ColorsType | undefined, Dispatch<keyof NCore.ColorsType | undefined>] = useState<keyof NCore.ColorsType | undefined>(undefined);
    const [color, setColor]: [keyof NCore.ColorsType | undefined, Dispatch<keyof NCore.ColorsType | undefined>] = useState<keyof NCore.ColorsType | undefined>(undefined);
    const [isOpenOnPressAction, setIsOpenOnPressAction] = useState(false);
    const [isShowTitle, setIsShowTitle] = useState(false);
    const [isClosable, setIsClosable] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isShowIcon, setIsShowIcon] = useState(false);

    return <PageContainer>
        <View
            style={[
                stylesheet.contentContainer,
                {
                    padding: spaces.container
                }
            ]}
        >
            <NCoreChip
                title={isShowTitle ? "This is a title." : undefined}
                icon={isShowIcon ? (props) => <HomeIcon
                    {...props}
                    size={18}
                /> : undefined}
                spreadBehaviour={spreadBehaviour}
                titleColor={titleColor}
                closable={isClosable}
                selected={isSelected}
                disabled={isDisabled}
                color={color}
                onPress={() => {
                    if(isOpenOnPressAction) {
                    // @ts-ignore
                        alert("Chip onPress action triggered.");
                    }

                    setIsSelected(!isSelected);
                }}
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

        <Button
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
        <Button
            title={`selected = ${isSelected ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsSelected(!isSelected);
            }}
        />
        <Button
            title={`onPress = ${isOpenOnPressAction ? "There is onPress prop." : "There is no onPress prop."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsOpenOnPressAction(!isOpenOnPressAction);
            }}
        />
        <Button
            title={`closable = ${isClosable ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsClosable(!isClosable);
            }}
        />
        <Button
            title={`icon = ${isShowIcon ? "HomeIcon" : "None Icon"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowIcon(!isShowIcon);
            }}
        />
        <Button
            title={`title = ${isShowTitle ? "There is a title prop." : "There is no title prop."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowTitle(!isShowTitle);
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
        <Button
            title={`titleColor = ${titleColor}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                const currentIndex = colorList.findIndex(e => e === titleColor);

                if(currentIndex + 1 > colorList.length - 1) {
                    setTitleColor(undefined);
                } else if(colorList[currentIndex + 1]) {
                    // @ts-ignore
                    setTitleColor(colorList[currentIndex + 1]);
                } else {
                    // @ts-ignore
                    setTitleColor(colorList[0]);
                }
            }}
        />
        <Button
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
    </PageContainer>;
};
export default Chip;
