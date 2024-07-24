import React from "react";
import Svg, {
    Path
} from "react-native-svg";

const Check = ({
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
            d="M20 1C9.507 1 1 9.507 1 20s8.507 19 19 19 19-8.507 19-19S30.493 1 20 1Zm8.236 15.787a1.728 1.728 0 1 0-2.654-2.21l-7.427 8.91-3.843-3.845a1.727 1.727 0 0 0-2.442 2.443l5.182 5.182a1.728 1.728 0 0 0 2.547-.116l8.637-10.364Z"
            clipRule="evenodd"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default Check;
