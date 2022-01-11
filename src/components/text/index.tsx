import React, {
    ReactNode,
    FC
} from  "react";
import {
    TextProps as NativeTextProps,
    Text as NativeText,
    TextStyle,
    StyleProp
} from "react-native";
import {
    useNCoreTheme 
} from "../../core/context";

interface ITextProps extends NativeTextProps {
    variant?: keyof NCore.Typography;
    style?: StyleProp<TextStyle>;
    color?: keyof NCore.Colors;
};

const Text: FC<ITextProps> = ({
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
            style,
            {
                ...typography[variant],
                color: color ? colors[color] : colors.body
            }
        ]}
        {...props}
    >
        {children}
    </NativeText>;
};
export default Text;