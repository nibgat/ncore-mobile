import React, {
    Dispatch,
    useState
} from "react";
import {
    View
} from "react-native";
import stylesheet from "./stylesheet";
import {
    RadioButton as NCoreRadioButton,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";
import {
    PhoneIcon,
    HomeIcon
} from "../../../assets/svgr";

type RadioButtonSpreadBehaviour = "baseline" | "stretch" | "free";

const RadioButton = () => {
    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [spreadBehaviour, setSpreadBehaviour]: [RadioButtonSpreadBehaviour | undefined, Dispatch<RadioButtonSpreadBehaviour | undefined>] = useState<RadioButtonSpreadBehaviour | undefined>(undefined);
    const [isShowCustomUnCheckedIcon, setIsShowCustomUnCheckedIcon] = useState(false);
    const [isShowCustomCheckedIcon, setIsShowCustomCheckedIcon] = useState(false);
    const [isHaveOnChange, setIsHaveOnChange] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    return <PageContainer>
        <View
            style={[
                stylesheet.contentContainer
            ]}
        >
            <NCoreRadioButton
                spreadBehaviour={spreadBehaviour}
                title="This is Required Title"
                selected={isSelected}
                disabled={isDisabled}
                onChange={(status) => {
                    if(isHaveOnChange) {
                    // @ts-ignore
                        alert("onChange triggered.");
                    }
                
                    setIsSelected(!status);
                }}
                unCheckedIcon={isShowCustomUnCheckedIcon ? (props) => <PhoneIcon
                    {...props}
                /> : undefined}
                checkedIcon={isShowCustomCheckedIcon ? (props) => <HomeIcon
                    {...props}
                /> : undefined}
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
            title={`onChange = ${isHaveOnChange ? "There is onChange prop." : "There is no onChange prop."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsHaveOnChange(!isHaveOnChange);
            }}
        />
        <Button
            title={`checkedIcon = ${isShowCustomCheckedIcon ? "There is Custom checkedIcon prop." : "There is no Custom checkedIcon prop."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowCustomCheckedIcon(!isShowCustomCheckedIcon);
            }}
        />
        <Button
            title={`unCheckedIcon = ${isShowCustomUnCheckedIcon ? "There is Custom checkedIcon prop." : "There is no Custom checkedIcon prop."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowCustomUnCheckedIcon(!isShowCustomUnCheckedIcon);
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
export default RadioButton;
