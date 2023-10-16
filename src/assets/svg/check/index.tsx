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

const CheckDefaultSize = {
    y: 35,
    x: 35
};

const LongSide = calculateSvgLongSideSize(CheckDefaultSize);

const SvgCheck = ({
    size = LongSide.value,
    color = "#000",
    style,
    ...props
}: INCoreIconPropsType) => {
    let x = LongSide.key === "x" ? 0 : size / 4;
    let y = LongSide.key === "y" ? 0 : size / 4;

    if(LongSide.key === "xy") {
        x = 0;
        y = 0;
    }

    return <Svg
        height={size}
        width={size}
        fill="none"
        style={[
            style
        ]}
        {...props}
    >
        <Path
            x={x}
            y={y}
            scale={size / LongSide.value}
            d="M17.5 0C7.85 0 0 7.85 0 17.5S7.85 35 17.5 35 35 27.15 35 17.5 27.15 0 17.5 0Zm9.108 11.635L15.3 25.096a1.346 1.346 0 0 1-1.01.48h-.022a1.345 1.345 0 0 1-1-.445L8.42 19.746a1.346 1.346 0 1 1 2-1.8l3.811 4.234L24.546 9.903a1.346 1.346 0 0 1 2.062 1.732Z"
            fill={color}
        />
    </Svg>;
};
export default SvgCheck;
