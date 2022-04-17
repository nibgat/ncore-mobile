import React, {
    FC
} from "react";
import {
    ScrollView,
    ViewStyle,
    View
} from "react-native";
import styles from "./stylesheet";
import {
    useNCoreTheme
} from "../../core/context";

export interface IPageContainerProps {
    contentContainerStyle?: ViewStyle;
    scrollable?: boolean;
    style?: ViewStyle;
}

const PageContainer: FC<IPageContainerProps> = ({
    contentContainerStyle,
    scrollable = true,
    children,
    style
}) => {
    const {
        colors,
        spaces
    } = useNCoreTheme();

    const renderWithScroll = () => {
        return <ScrollView
            style={[
                styles.container,
                {
                    backgroundColor: colors.layer1
                },
                style
            ]}
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingVertical: spaces.container / 2,
                paddingHorizontal: spaces.container,
                ...contentContainerStyle
            }}
        >
            {children}
        </ScrollView>;
    };

    const renderWithoutScroll = () => {
        return <View
            style={[
                styles.container,
                {
                    paddingVertical: spaces.container / 2,
                    paddingHorizontal: spaces.container,
                    backgroundColor: colors.layer1
                },
                style
            ]}
        >
            {children}
        </View>;
    };

    return scrollable ? renderWithScroll() : renderWithoutScroll();
};
export default PageContainer;
