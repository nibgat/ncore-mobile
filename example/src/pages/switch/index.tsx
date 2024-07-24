import React, {
    Dispatch,
    useState
} from "react";
import {
    View
} from "react-native";
import stylesheet from "./stylesheet";
import {
    Switch as NCoreSwitch,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";

type SwitchSpreadBehaviour = "baseline" | "stretch" | "free";

const Switch = () => {
    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [spreadBehaviour, setSpreadBehaviour]: [SwitchSpreadBehaviour | undefined, Dispatch<SwitchSpreadBehaviour | undefined>] = useState<SwitchSpreadBehaviour | undefined>(undefined);
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [isHaveOnPress, setIsHaveOnPress] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return <PageContainer>
        <NCoreSwitch
            spreadBehaviour={spreadBehaviour}
            disabled={isDisabled}
            isActive={isActive}
            title={title}
            onPress={() => {
                setIsActive(!isActive);

                if(isHaveOnPress) {
                    // @ts-ignore
                    alert("onPress triggered.");
                }
            }}
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
            title={`title = ${title ? "There is title." : "There is no title."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                if(!title) {
                    setTitle("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae scelerisque lectus. Sed commodo quam quis metus ultricies, et faucibus justo pulvinar.");
                } else {
                    setTitle(undefined);
                }
            }}
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
            title={`onPress = ${isHaveOnPress ? "There is onPress prop." : "There is no onPress prop."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsHaveOnPress(!isHaveOnPress);
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
export default Switch;
