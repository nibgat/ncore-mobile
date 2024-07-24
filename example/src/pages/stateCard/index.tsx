import React, {
    useState
} from "react";
import {
    View
} from "react-native";
import stylesheet from "./stylesheet";
import {
    StateCard as NCoreStateCard,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";
import {
    PhoneIcon
} from "../../../assets/svgr";

const StateCard = () => {
    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [isShowCustomFooter, setIsShowCustomFooter] = useState(false);
    const [isShowContent, setIsShowContent] = useState(false);
    const [isShowIcon, setIsShowIcon] = useState(false);

    return <PageContainer>
        <NCoreStateCard
            content={isShowContent ? "Hello this is a long content for StateCard Component." : undefined}
            icon={isShowIcon ? (props) => <PhoneIcon {...props}/> : undefined}
            title="Hello This is a REQUIRED Title"
        >
            {
                isShowCustomFooter ?
                    <Button
                        spreadBehaviour="stretch"
                        title="Action Button"
                        onPress={() => {
                            // @ts-ignore
                            alert("Custom Footer Action Button triggered.");
                        }}
                    />
                    :
                    null
            }
        </NCoreStateCard>

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
            title={`content = ${isShowContent ? "There is a content." : "There is no content."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowContent(!isShowContent);
            }}
        />
        <Button
            title={`icon = ${isShowIcon ? "Phone Icon" : "None Icon"}`}
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
            title={`children ( wrapped content ) = ${isShowCustomFooter ? "There is children." : "There is no children."}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsShowCustomFooter(!isShowCustomFooter);
            }}
        />
    </PageContainer>;
};
export default StateCard;
