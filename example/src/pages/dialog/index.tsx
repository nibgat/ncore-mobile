import React, {
    Dispatch,
    useState
} from "react";
import {
    View
} from "react-native";
import {
    Dialog as NCoreDialog,
    PageContainer,
    NCoreTheme,
    Button,
    Text
} from "ncore-mobile";
import stylesheet from "./stylesheet";

type DialogVariant = "yes-no" | "ok" | "info";

const Dialog = () => {
    const [variant, setVariant]: [DialogVariant | undefined, Dispatch<DialogVariant | undefined>] = useState<DialogVariant | undefined>(undefined);
    const [isShowHeaderContent, setIsShowHeaderContent] = useState(false);
    const [isShowBottomContent, setIsShowBottomContent] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState(false);
    const [title, setTitle] = useState(false);

    const {
        spaces
    } = NCoreTheme.useContext();

    return <PageContainer>
        <Button
            title={`isVisible = ${isVisible ? "true" : "false"}`}
            spreadBehaviour="stretch"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsVisible(!isVisible);
            }}
        />

        <Button
            title={`headerContent = ${isShowHeaderContent ? "There is Custom Object" : "There is no Custom Object"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowHeaderContent(!isShowHeaderContent);
            }}
        />
        <Button
            title={`bottomContent = ${isShowBottomContent ? "There is Custom Object" : "There is no Custom Object"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowBottomContent(!isShowBottomContent);
            }}
        />
        <Button
            title={`content = ${content ? "There is Custom Content or Text" : "There is no Custom Content or Text"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setContent(!content);
            }}
        />
        <Button
            title={`title = ${title ? "There is Text" : "There is no Text"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setTitle(!title);
            }}
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
                if(!variant) {
                    setVariant("info");
                } else if(variant === "info") {
                    setVariant("ok");
                } else if(variant === "ok") {
                    setVariant("yes-no");
                } else if(variant === "yes-no") {
                    setVariant(undefined);
                }
            }}
        />

        <NCoreDialog
            headerComponent={isShowHeaderContent ? <View>
                <Text
                    variant="header3"
                >
                    Custom Dialog Title ( headerComponent prop. )
                </Text>
            </View> : undefined}
            bottomComponent={isShowBottomContent ? <View
                style={{
                    ...stylesheet.bottomContainer,
                    padding: spaces.container
                }}
            >
                <Button
                    spreadBehaviour="free"
                    title="Okay"
                    onPress={() => {
                        setIsVisible(false);
                    }}
                />
            </View> : undefined}
            onOverlayPress={() => {
                setIsVisible(false);
            }}
            secondaryButtonProps={{
                title: "Cancel",
                onPress: () => {
                    setIsVisible(false);
                }
            }}
            primaryButtonProps={{
                onPress: () => {
                    setIsVisible(false);
                }
            }}
            content={content ? "This is content text for content prop." : undefined}
            title={title ? "Tilte Prop" : undefined}
            isVisible={isVisible}
            variant={variant}
        />
    </PageContainer>;
};
export default Dialog;
