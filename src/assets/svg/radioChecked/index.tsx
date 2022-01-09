import React from "react";
import {
    INCoreIconProps 
} from "../../../core/types";
import Svg, {
    Rect 
} from "react-native-svg";

const RadioChecked = ({
    color,
    size,
    ...props
}: INCoreIconProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
            <Rect x={1} y={1} width={20} height={20} rx={10} stroke={color} strokeWidth={2} />
            <Rect x={6} y={6} width={10} height={10} rx={5} fill={color} />
        </Svg>
    );
};  
export default RadioChecked;