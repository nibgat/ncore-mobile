import React from "react";
import Svg, {
    Path
} from "react-native-svg";

const Clear = ({
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
            d="M20 1C9.524 1 1 9.524 1 20c0 10.477 8.524 19 19 19 10.477 0 19-8.523 19-19C39 9.524 30.477 1 20 1Zm6.88 23.813a1.462 1.462 0 1 1-2.067 2.066L20 22.067l-4.813 4.812a1.462 1.462 0 0 1-2.066-2.066L17.933 20l-4.812-4.813a1.462 1.462 0 0 1 2.066-2.066L20 17.933l4.813-4.812a1.462 1.462 0 0 1 2.066 2.066L22.067 20l4.812 4.813Z"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default Clear;
