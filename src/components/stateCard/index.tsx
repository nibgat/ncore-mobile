import React, {
    ReactElement,
    FC
} from "react";
import {
    View
} from "react-native";
import {
    NCoreIcon 
} from "../../core/types";
import styles from "./stylesheet";
import {
    Check 
} from "../../assets/svg";
import Text from "../text";
import {
    useNCoreTheme 
} from "../../core/context";

interface IStateCardProps {
    content?: string | ReactElement;
    icon?: NCoreIcon;
    title: string;
};

const StateCard: FC<IStateCardProps> = ({
    icon: IconProp = <Check
        size={100}
    />,
    content,
    title
}) => {
    const {
        spaces
    } = useNCoreTheme();

    const renderFooter = () => {
        if(typeof content === "string") {
            return <Text>
                {content}
            </Text>;
        }

        return content;
    };

    return <View
        style={[
            styles.container
        ]}
    >
        {IconProp ? IconProp : null}
        <Text
            variant="header8"
            style={[
                {
                    marginBottom: content ? spaces.content : undefined,
                    marginTop: IconProp ? spaces.content : undefined
                }
            ]}
        >
            {title}
        </Text>
        {renderFooter()}
    </View>;
};
export default StateCard;
