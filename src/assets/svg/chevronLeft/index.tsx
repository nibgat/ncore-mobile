import React from "react";
import Svg, {
    Path
} from "react-native-svg";
import {
    calculateSvgLongSideSize 
} from "../util";
import {
    INCoreIconPropsType 
} from "../../../types";

const ChevronLeftDefaultSize = {
    y: 17,
    x: 9
};

const LongSide = calculateSvgLongSideSize(ChevronLeftDefaultSize);

const SvgChevronLeft = ({
    size = LongSide.value,
    color = "#000",
    ...props
}: INCoreIconPropsType) => {
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
        viewBox={`0 0 ${size} ${size}`}
        {...props}
    >
        <Path
            x={x}
            y={y}
            scale={size / LongSide.value}
            d="M8.53.22a.75.75 0 0 1 0 1.06L1.81 8l6.72 6.72a.75.75 0 1 1-1.06 1.06L.22 8.53a.75.75 0 0 1 0-1.06L7.47.22a.75.75 0 0 1 1.06 0Z"
            fill={color}
        />
    </Svg>;
};
export default SvgChevronLeft;
