import React from "react";
import Svg, {
    Path
} from "react-native-svg";

const ChevronDown = ({
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
            d="M37.21 10.302c.506.514.79 1.21.79 1.936a2.76 2.76 0 0 1-.79 1.936L21.91 29.699A2.681 2.681 0 0 1 20 30.5a2.681 2.681 0 0 1-1.908-.801L2.79 14.174a2.758 2.758 0 0 1-.585-2.984c.136-.332.335-.634.585-.888a2.665 2.665 0 0 1 3.816 0L20 23.887l13.394-13.585a2.68 2.68 0 0 1 1.908-.801 2.68 2.68 0 0 1 1.908.8Z"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default ChevronDown;
