import React from "react";
import Svg, {
    Path
} from "react-native-svg";

const RadioChecked = ({
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
            d="M20 2.5C10.34 2.5 2.5 10.34 2.5 20S10.34 37.5 20 37.5 37.5 29.66 37.5 20 29.66 2.5 20 2.5ZM20 34c-7.735 0-14-6.265-14-14S12.265 6 20 6s14 6.265 14 14-6.265 14-14 14Z"
            scale={1 / pathScale}
        />
        <Path
            fill={color}
            d="M20 29.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default RadioChecked;
