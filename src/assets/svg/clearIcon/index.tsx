import React from "react";
import {
    INCoreIconProps 
} from "../../../core/types";
import Svg, {
    Path 
} from "react-native-svg";
import {
    calculateSvgLongSideSize 
} from "../util";

const ClearIconDefaultSize = {
    y: 20,
    x: 20
};

const LongSide = calculateSvgLongSideSize(ClearIconDefaultSize);

const SvgClearIcon = ({
    size = LongSide.value,
    color,
    ...props
}: INCoreIconProps) => {
    let x = LongSide.key === "x" ? 0 : size / 4;
    let y = LongSide.key === "y" ? 0 : size / 4;

    if(LongSide.key === "xy") {
        x = 0;
        y = 0;
    }

    return <Svg
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <Path
            x={x}
            y={y}
            scale={size / LongSide.value}
            d="M10 0c5.53 0 10 4.47 10 10s-4.47 10-10 10S0 15.53 0 10 4.47 0 10 0zm3.59 5L10 8.59 6.41 5 5 6.41 8.59 10 5 13.59 6.41 15 10 11.41 13.59 15 15 13.59 11.41 10 15 6.41 13.59 5z"
            fill={color}
        />
    </Svg>;
};
export default SvgClearIcon;
