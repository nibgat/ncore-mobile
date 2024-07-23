import React from "react";
import Svg, {
    Path
} from "react-native-svg";

const Home = ({
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
            d="M8.055 4h5.81a1.156 1.156 0 0 1 1.087.758l2.256 6.037c.074.2.093.415.054.625l-1.13 6.102c1.388 3.288 3.682 5.498 7.485 7.481l5.987-1.17c.213-.041.433-.022.635.056l6.013 2.309A1.163 1.163 0 0 1 37 27.29v5.59c0 2.536-2.218 4.594-4.814 4.024-4.729-1.035-13.491-3.67-19.628-9.85-5.88-5.92-7.85-14.096-8.512-18.515C3.666 6.015 5.676 4 8.055 4Z"
            clipRule="evenodd"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default Home;
