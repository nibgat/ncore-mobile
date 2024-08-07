import React, {
    FC
} from  "react";
import {
    Text as NativeText
} from "react-native";
import ITextProps from "./types";
import NCore from "../../core";

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
    } = NCore.NCoreContext.ThemeContext.useContext();

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
