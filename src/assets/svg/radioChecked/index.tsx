import React from "react";
import {
    INCoreIconProps 
} from "../../../core/types";
import Svg, {
    Rect 
} from "react-native-svg";
import {
    calculateSvgLongSideSize 
} from "../util";

const RadioCheckedDefaultSize = {
    y: 20,
    x: 20
};

const LongSide = calculateSvgLongSideSize(RadioCheckedDefaultSize);

const RadioChecked = ({
    size = LongSide.value,
    color,
    ...props
}: INCoreIconProps) => {
    const strokeWidth = size / 10;

    const containerSize = size - strokeWidth;
    const indicatorSize = size / 2;

    const indicatorLocation = (strokeWidth / 2) + ((containerSize - indicatorSize) / 2);

    return <Svg
        width={size}
        height={size}
        fill="transparent"
        {...props}
    >
        <Rect x={strokeWidth / 2} y={strokeWidth / 2} width={containerSize} height={containerSize} rx={containerSize / 2} stroke={color} strokeWidth={strokeWidth} />
        <Rect x={indicatorLocation} y={indicatorLocation} width={indicatorSize} height={indicatorSize} rx={indicatorSize / 2} fill={color} />
    </Svg>;
};  
export default RadioChecked;
