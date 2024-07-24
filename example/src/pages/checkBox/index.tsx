import React, {
    useState
} from "react";
import {
    View
} from "react-native";
import stylesheet from "./stylesheet";
import {
    CheckBox as NCoreCheckBox,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";
import {
    HomeIcon
} from "../../../assets/svgr";

const CheckBox = () => {
    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [isShowCustomCheckedIcon, setIsShowCustomCheckedIcon] = useState(false);
    const [isHaveOnChange, setIsHaveOnChange] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return <PageContainer>
        <NCoreCheckBox
            disabled={isDisabled}
            isActive={isActive}
            onChange={(status) => {
                if(isHaveOnChange) {
                    // @ts-ignore
                    alert("onChange triggered.");
                }

                setIsActive(!status);
            }}
            checkedIcon={isShowCustomCheckedIcon ? (props) => <HomeIcon
                {...props}
            /> : undefined}
        />

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
            title={`isActive = ${isActive ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsActive(!isActive);
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
    </PageContainer>;
};
export default CheckBox;
