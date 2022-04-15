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

const CheckBoxDefaultSize = {
    y: 12,
    x: 12
};

const LongSide = calculateSvgLongSideSize(CheckBoxDefaultSize);

const SvgCheckBox = ({
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 0a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm3.733 8.763c.119.15.304.237.5.237h.029a.648.648 0 0 0 .288-.082.612.612 0 0 0 .215-.2l3.14-4.805a.581.581 0 0 0-.2-.823.654.654 0 0 0-.474-.075.627.627 0 0 0-.39.266L5.183 7.349 4.126 6.02a.617.617 0 0 0-.413-.232.656.656 0 0 0-.465.116.607.607 0 0 0-.242.394.57.57 0 0 0 .121.442l1.606 2.024Z"
            fill={color}
        />
    </Svg>;
};

export default SvgCheckBox;
