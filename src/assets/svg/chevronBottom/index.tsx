import React from "react";
import Svg, {
    Path
} from "react-native-svg";
import {
    INCoreIconProps 
} from "../../../core/types";
import {
    calculateSvgLongSideSize 
} from "../util";

const ChevronBottomDefaultSize = {
    y: 10,
    x: 18
};

const LongSide = calculateSvgLongSideSize(ChevronBottomDefaultSize);

const SvgChevronBottom = ({
    size = LongSide.value,
    color = "#000",
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
            d="M16.019.2a.697.697 0 0 1 1.129.223.68.68 0 0 1-.15.747L9.09 9a.697.697 0 0 1-.98 0L.204 1.17a.68.68 0 0 1 0-.97.697.697 0 0 1 .979 0L8.6 7.343 16.019.2Z"
            fill={color}
        />
    </Svg>;
};
export default SvgChevronBottom;
