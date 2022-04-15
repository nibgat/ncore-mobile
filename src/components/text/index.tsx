import React, {
    FC
} from  "react";
import {
    Text as NativeText,
    TextProps,
    TextStyle,
    StyleProp
} from "react-native";
import {
    useNCoreTheme 
} from "../../core/context";

export interface ITextProps extends TextProps {
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
        {...props}
        style={[
            style,
            {
                ...typography[variant],
                color: color ? colors[color] : colors.body
            }
        ]}
    >
        {children}
    </NativeText>;
};
export default Text;
