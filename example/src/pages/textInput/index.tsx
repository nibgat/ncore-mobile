import React, {
    useEffect,
    useState
} from "react";
import {
    TextInput as NCoreTextInput,
    useNCoreLocalization,
    PageContainer,
    useNCoreTheme,
    Header,
    Button
} from "ncore-mobile";
import {
    useNavigation 
} from "@react-navigation/native";

const TextInput = () => {
    const navigation = useNavigation();

    const {
        localize
    } = useNCoreLocalization();

    const {
        spaces
    } = useNCoreTheme();

    const [currentClearEnabledStatus, setCurrentClearEnabledStatus] = useState(false);
    const [currentIsRequiredStatus, setCurrentIsRequiredStatus] = useState(false);
    const [currentMultilineStatus, setCurrentMultilineStatus] = useState(false);
    const [currentDisabledStatus, setCurrentDisabledStatus] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                onBack={() => navigation.goBack()}
                title="Text Input"
            />
        });
    });

    return <PageContainer>
        <NCoreTextInput
            placeholder={localize("input-placeholder")}
            disabled={currentDisabledStatus}
            clearEnabled={currentClearEnabledStatus}
            multiline={currentMultilineStatus}
            isRequired={currentIsRequiredStatus}
            style={{
                marginBottom: spaces.content * 4
            }}
        />
        <Button
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
        <Button
            title={`clearEnabled: ${currentClearEnabledStatus ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentClearEnabledStatus(!currentClearEnabledStatus);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <Button
            title={`multiline: ${currentMultilineStatus ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentMultilineStatus(!currentMultilineStatus);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <Button
            title={`isRequired: ${currentIsRequiredStatus ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentIsRequiredStatus(!currentIsRequiredStatus);
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
    </PageContainer>;
};
export default TextInput;
