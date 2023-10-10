import {
    TextStyle
} from "react-native";
import {
    TextProps
} from "react-native";
import {
    StyleProp
} from "react-native";

interface ITextProps extends TextProps {
    variant?: keyof NCore.TypographyType;
    color?: keyof NCore.ColorsType;
    style?: StyleProp<TextStyle>;
};
export default ITextProps;
