import React, {
    useState
} from "react";
import {
    View
} from "react-native";
import {
    Header as NCoreHeader,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";
import stylesheet from "./stylesheet";
import {
    HomeIcon 
} from "../../../assets/svgr";

const Header = () => {
    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [isShowRenderRight, setIsShowRenderRight] = useState(false);
    const [isShowBackButton, setIsShowBackButton] = useState(false);
    const [isShowSubTitle, setIsShowSubTitle] = useState(false);

    return <PageContainer>
        <NCoreHeader
            subTitle={isShowSubTitle ? "There is sub-title." : undefined}
            backButton={isShowBackButton}
            title="Header Title"
            renderRight={isShowRenderRight ? <View>
                <Button
                    onPress={() => {
                        // @ts-ignore
                        alert("Render Right Button triggered.");
                    }}
                    icon={(props) => <HomeIcon
                        {...props}
                    />}
                />
            </View> : undefined}
            onBack={() => {
                // @ts-ignore
                alert("Go back action triggered.");
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
            title={`backButton = ${isShowBackButton ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowBackButton(!isShowBackButton);
            }}
        />
        <Button
            title={`subTitle = ${isShowSubTitle ? "There is Sub-Title" : "There is no Sub-Title"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowSubTitle(!isShowSubTitle);
            }}
        />
        <Button
            title={`renderRight = ${isShowRenderRight ? "There is Render Right Custom Component" : "There is no Render Right Custom Component"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowRenderRight(!isShowRenderRight);
            }}
        />
    </PageContainer>;
};
export default Header;
