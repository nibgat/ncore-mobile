import React, {
    FC
} from  "react";
import {
    Text as NativeText,
    TextStyle,
    StyleProp
} from "react-native";
import {
    useNCoreTheme 
} from "../../core/context";

interface ITextProps {
    variant?: keyof NCore.Typography;
    style?: StyleProp<TextStyle>;
    color?: keyof NCore.Colors;
};

const Text: FC<ITextProps> = ({
    variant = "body",
    children,
    color,
    style
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
    >
        {children}
    </NativeText>;
};
export default Text;