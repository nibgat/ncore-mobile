import * as React from "react";
import Svg, {
    ClipPath,
    Path,
    Defs,
    G
} from "react-native-svg";
import {
    INCoreIconProps 
} from "ncore-mobile";

function SvgTest(props: INCoreIconProps) {
    return (
        <Svg width={props.size} height={props.size} viewBox="0 0 19 19" fill="none" {...props}>
            <G clipPath="url(#set_svgclip0_533_81)">
                <Path
                    d="M11 7.83v-.18l2.01 2.01 5.23-2.44-.63-1.36-4.28 2L11 5.53v-1.4l2.33-2.33 4.28 2 .63-1.36L13.01 0 11 2.01v-.18H9v2H5.82c-.42-1.16-1.52-2-2.82-2-1.66 0-3 1.34-3 3 0 1.1.6 2.05 1.48 2.58l2.6 8.42H1v3h13v-3h-3.62L5.41 6.59c.17-.23.31-.48.41-.76H9v2h2zm-8-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                    fill={props.color}
                />
            </G>
            <Defs>
                <ClipPath id="set_svgclip0_533_81">
                    <Path fill="#fff" d="M0 0h18.83v18.83H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default SvgTest;
