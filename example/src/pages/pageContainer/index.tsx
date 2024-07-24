import React, {
    useState
} from "react";
import {
    View
} from "react-native";
import {
    PageContainer as NCorePageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";
import stylesheet from "./stylesheet";

const PageContainer = () => {
    const [isScrollable, setIsScrollable] = useState(false);

    const {
        spaces
    } = NCoreTheme.useContext();

    return <NCorePageContainer
        scrollable={isScrollable}
    >
        <Button
            title={`scrollable = ${isScrollable ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsScrollable(!isScrollable);
            }}
        />
        <View
            style={[
                stylesheet.placeholderView
            ]}
        />
    </NCorePageContainer>;
};
export default PageContainer;
