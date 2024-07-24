import React, {
    useState
} from "react";
import {
    View
} from "react-native";
import stylesheet from "./stylesheet";
import {
    RowItem as NCoreRowItem,
    PageContainer,
    NCoreTheme,
    Button,
    Text
} from "ncore-mobile";
import {
    HomeIcon
} from "../../../assets/svgr";

const RowItem = () => {
    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [isShowBodyComponent, setIsShowBodyComponent] = useState(false);
    const [isShowTailComponent, setIsShowTailComponent] = useState(false);
    const [isShowTitle, setIsShowTitle] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    return <PageContainer>
        <NCoreRowItem
            title={isShowTitle ? "This is a title." : undefined}
            BodyComponent={isShowBodyComponent ? <View>
                <Text>
                    Custom Body Component ( Content )
                </Text>
            </View> : undefined}
            TailComponent={isShowTailComponent ? <View>
                <HomeIcon
                    size={24}
                />
            </View> : undefined}
            disabled={isDisabled}
            onPress={() => {
                // @ts-ignore
                alert("Row Item action triggered.");
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
            title={`title = ${isShowTitle ? "There is Title" : "There is no Title"}`}
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
            title={`BodyComponent = ${isShowBodyComponent ? "There is BodyComponent prop." : "There is no BodyComponent prop."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowBodyComponent(!isShowBodyComponent);
            }}
        />
        <Button
            title={`TailComponent = ${isShowTailComponent ? "There is TailComponent prop." : "There is no TailComponent prop."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowTailComponent(!isShowTailComponent);
            }}
        />
    </PageContainer>;
};
export default RowItem;
