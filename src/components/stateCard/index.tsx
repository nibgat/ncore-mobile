import React, {
    FC
} from "react";
import {
    View
} from "react-native";
import stateCardStyler, {
    stylesheet
} from "./stylesheet";
import IStateCardProps from "./types";
import Text from "../text";
import {
    NCoreTheme
} from "../../core";
import {
    CheckIcon 
} from "../../assets/svg";

const StateCard: FC<IStateCardProps> = ({
    icon: IconProp = (props) => <CheckIcon
        {...props}
    />,
    children,
    content,
    title
}) => {
    const {
        spaces,
        colors
    } = NCoreTheme.useContext();

    const {
        iconContainerStyle,
        contentStyle,
        titleStyle
    } = stateCardStyler({
        spaces
    });

    const renderFooter = () => {
        if(typeof content === "string") {
            return <Text
                style={[
                    stylesheet.content,
                    contentStyle
                ]}
            >
                {content}
            </Text>;
        }

        return content;
    };

    return <View
        style={[
            stylesheet.container
        ]}
    >
        <View
            style={[
                iconContainerStyle
            ]}
        >
            {
                IconProp({
                    color: colors.body,
                    size: 100
                })
            }
        </View>
        <Text
            variant="header8"
            style={[
                stylesheet.title,
                titleStyle
            ]}
        >
            {title}
        </Text>
        {renderFooter()}
        {children}
    </View>;
};
export default StateCard;
