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
    children?: ReactNode;
    color?: keyof NCore.Colors;
    style?: StyleProp<TextStyle>;
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