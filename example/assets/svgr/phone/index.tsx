import React from "react";
import Svg, {
    Path
} from "react-native-svg";

const Phone = ({
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
            d="m21.666 4.483 14.847 14.85c1.04 1.04.304 2.817-1.166 2.817h-1.65v9.9A4.95 4.95 0 0 1 28.748 37h-1.65V25.45a4.95 4.95 0 0 0-4.658-4.942l-.29-.008h-3.3a4.948 4.948 0 0 0-4.949 4.95V37h-1.65a4.949 4.949 0 0 1-4.949-4.95v-9.9h-1.65c-1.468 0-2.205-1.777-1.166-2.817l14.848-14.85a1.65 1.65 0 0 1 2.332 0ZM22.15 23.8a1.65 1.65 0 0 1 1.65 1.65V37H17.2V25.45a1.65 1.65 0 0 1 1.457-1.639l.193-.011h3.3Z"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default Phone;
