import React, {
    ReactElement,
    FC
} from "react";
import {
    ViewStyle,
    View
} from "react-native";
import {
    useNCoreTheme
} from "../../core/context";
import {
    ChevronLeft
} from "../../assets/svg";
import Button from "../button";
import {
    NCoreIcon
} from "../../core/types";
import Text from "../text";
import styles from "./stylesheet";

interface IHeaderProps {
    style?: ViewStyle | ViewStyle[];
    backButtonIcon?: NCoreIcon;
    renderRight?: ReactElement;
    backButton?: boolean;
    onBack?: () => void;
    subTitle?: string;
    title: string;
};

const Header: FC<IHeaderProps> = ({
    backButton = true,
    backButtonIcon,
    renderRight,
    subTitle,
    onBack,
    style,
    title
}) => {
    const {
        colors,
        spaces
    } = useNCoreTheme();

    const renderBackButton = () => {
        if(!backButton) {
            return null;
        }

        return <Button
            icon={backButtonIcon ? backButtonIcon : () => <ChevronLeft
                color={colors.body}
                size={24}
            />}
            spreadBehaviour="free"
            variant="ghost"
            onPress={() => {
                if(onBack) onBack();
            }}
            style={{
                paddingRight: spaces.content,
                paddingLeft: spaces.content
            }}
        />;
    };

    const renderTitle = () => {
        return <View
            style={[
                styles.titleContainer,
                {
                    paddingHorizontal: spaces.container
                }
            ]}
        >
            <Text
                variant={"header5"}
                numberOfLines={subTitle ? 1 : 2}
            >
                {title}
            </Text>
            {
                subTitle ?
                    <Text
                        numberOfLines={1}
                        variant="header7"
                        color="hideBody"
                    >
                        {subTitle}
                    </Text>
                    :
                    null
            }
        </View>;
    };

    return <View
        style={[
            styles.container,
            {
                backgroundColor: colors.layer1
            },
            style
        ]}
    >
        {renderBackButton()}
        {renderTitle()}
        {renderRight}
    </View>;
};
export default Header;
