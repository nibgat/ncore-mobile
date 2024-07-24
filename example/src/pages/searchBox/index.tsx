import React, {
    useState,
    useRef
} from "react";
import {
    View
} from "react-native";
import {
    SearchBox as NCoreSearchBox,
    TextInputRefProps,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";
import stylesheet from "./stylesheet";

const SearchBox = () => {
    const [isClearEnabled, setIsClearEnabled] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [text, setText] = useState("");

    const inputRef = useRef<TextInputRefProps>(null);

    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    return <PageContainer>
        <NCoreSearchBox
            placeholder="Place holder text."
            cleanable={isClearEnabled}
            disabled={isDisabled}
            onChangeText={(text) => {
                setText(text);
            }}
            ref={inputRef}
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
            title={`ref.focus()`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                inputRef.current?.focus();
            }}
        />
        <Button
            title={`ref.blur()`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                inputRef.current?.blur();
            }}
        />
        <Button
            title={`ref.getIsFocused()`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                console.warn(inputRef.current?.getIsFocused());
            }}
        />
        <Button
            title={`ref.clear()`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                inputRef.current?.clear();
            }}
        />
        <Button
            title={`ref.value("Test")`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                inputRef.current?.value("Test");
            }}
        />
        <Button
            title={`onChangeText => alert(text)`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                // @ts-ignore
                alert(text);
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
            title={`clearEnabled = ${isClearEnabled ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsClearEnabled(!isClearEnabled);
            }}
        />
    </PageContainer>;
};
export default SearchBox;
