import React from "react";
import Svg, {
    Rect 
} from "react-native-svg";
import {
    calculateSvgLongSideSize 
} from "../util";
import {
    INCoreIconPropsType 
} from "../../../types";

const RadioUncheckedDefaultSize = {
    y: 20,
    x: 20
};

const LongSide = calculateSvgLongSideSize(RadioUncheckedDefaultSize);

const RadioUnchecked = ({
    size = LongSide.value,
    color,
    ...props
}: INCoreIconPropsType) => {
    const strokeWidth = size / 10;

    const containerSize = size - strokeWidth;

    return <Svg
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <Rect x={strokeWidth / 2} y={strokeWidth / 2} width={containerSize} height={containerSize} rx={containerSize / 2} stroke={color} strokeWidth={strokeWidth} />
    </Svg>;
};  
export default RadioUnchecked;
