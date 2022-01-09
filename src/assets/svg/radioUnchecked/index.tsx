import React from "react";
import {
    INCoreIconProps 
} from "../../../core/types";
import Svg, {
    Rect 
} from "react-native-svg";

const RadioUnchecked = ({
    color,
    size,
    ...props
}: INCoreIconProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
            <Rect x={1} y={1} width={20} height={20} rx={10} stroke={color} strokeWidth={2} />
        </Svg>
    );
};  
export default RadioUnchecked;