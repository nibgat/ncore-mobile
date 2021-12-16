import React, {
    ReactNode,
    FC
} from  "react";
import {
    Text as NativeText,
    TextProps as NativeTextProps,
    TextStyle
} from "react-native";
import {
    useNCoreTheme 
} from "../../core/context";

interface TextProps extends NativeTextProps {
    variant?: keyof NCore.Typography;
    children?: ReactNode;
    color?: keyof NCore.Colors;
    style?: TextStyle;
};

const Text: FC<TextProps> = ({
    variant = "body",
    children,
    color,
    style,
    ...props
}) => {
    const {
        typography,
        colors
    } = useNCoreTheme();

    return <NativeText
        style={[
            {
                ...typography[variant],
                color: color ? color : colors.body
            },
            style
        ]}
        {...props}
    >
        {children}
    </NativeText>;
};
export default Text;