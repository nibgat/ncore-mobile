import React from "react";
import Svg, {
    Path
} from "react-native-svg";

const ChevronLeft = ({
    color = "#000",
    size = 40,
    ...props
}) => {
    const pathScale = 40 / size;

    return <Svg
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            fillRule="evenodd"
            d="M28.286 3.688c.42.441.656 1.04.656 1.663 0 .624-.236 1.222-.656 1.663L16.412 19.47l11.874 12.455c.22.216.397.476.52.764a2.452 2.452 0 0 1 .03 1.84c-.112.292-.28.558-.493.782a2.24 2.24 0 0 1-.746.518 2.15 2.15 0 0 1-1.753-.033 2.247 2.247 0 0 1-.728-.545l-13.46-14.118A2.413 2.413 0 0 1 11 19.47c0-.624.236-1.222.656-1.663l13.46-14.119c.42-.44.99-.688 1.585-.688.594 0 1.164.248 1.585.688Z"
            clipRule="evenodd"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default ChevronLeft;
