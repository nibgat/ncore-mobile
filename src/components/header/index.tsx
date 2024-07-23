import React, {
    FC
} from "react";
import {
    View
} from "react-native";
import headerStyler, {
    stylesheet 
} from "./stylesheet";
import IHeaderProps from "./type";
import Button from "../button";
import Text from "../text";
import {
    NCoreTheme
} from "ncore-mobile";
import {
    ChevronLeftIcon
} from "../../../example/assets/svgr";

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
    } = NCoreTheme.useContext();

    const {
        titleContainerStyle,
        backButtonStyle,
        containerStyle
    } = headerStyler({
        spaces,
        colors
    });

    const renderBackButton = () => {
        if(!backButton) {
            return null;
        }

        return <Button
            icon={backButtonIcon ? backButtonIcon : () => <ChevronLeftIcon
                color={colors.body}
                size={24}
            />}
            spreadBehaviour="free"
            variant="ghost"
            onPress={() => {
                if(onBack) onBack();
            }}
            style={[
                backButtonStyle
            ]}
        />;
    };

    const renderTitle = () => {
        return <View
            style={[
                stylesheet.titleContainer,
                titleContainerStyle
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
            stylesheet.container,
            containerStyle,
            style
        ]}
    >
        {renderBackButton()}
        {renderTitle()}
        {renderRight}
    </View>;
};
export default Header;
