import React from "react";
import Svg, {
    Path
} from "react-native-svg";

const CheckBox = ({
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
            d="M7.143 1C4.306 1 2 3.37 2 6.286v26.428C2 35.63 4.306 38 7.143 38h25.714C35.694 38 38 35.63 38 32.714V6.286C38 3.37 35.694 1 32.857 1H7.143ZM29.08 15.618 18.795 26.19a1.884 1.884 0 0 1-2.725 0l-5.142-5.286a2.013 2.013 0 0 1 0-2.8 1.891 1.891 0 0 1 2.724 0l3.777 3.882 8.92-9.176a1.884 1.884 0 0 1 2.723 0c.748.777.756 2.032 0 2.8l.008.008Z"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default CheckBox;
