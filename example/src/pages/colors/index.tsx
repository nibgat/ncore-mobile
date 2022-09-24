import React, {
    useEffect,
    useState
} from "react";
import {
    View
} from "react-native";
import {
    useNCoreLocalization,
    PageContainer,
    useNCoreTheme,
    Button,
    Header
} from "ncore-mobile";
import {
    useNavigation 
} from "@react-navigation/native";
import stylesheet from "./stylesheet";
import {
    colors
} from "../../../../src/core/theme/variants/dark";

// @ts-ignore
const COLORS: Array<keyof NCore.Colors> = Object.keys(colors);

const Colors = () => {
    const navigation = useNavigation();

    const {
        localize
    } = useNCoreLocalization();

    const {
        radiuses,
        colors,
        spaces
    } = useNCoreTheme();

    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                onBack={() => navigation.goBack()}
                title={localize("colors")}
            />
        });
    });

    return <PageContainer
        scrollable={false}
    >
        <View
            style={[
                stylesheet.colorBar,
                {
                    backgroundColor: colors[COLORS[currentColorIndex]],
                    marginBottom: spaces.content * 2,
                    borderRadius: radiuses.half
                }
            ]}
        />
        <Button
            title={`color: ${COLORS[currentColorIndex]}`}
            spreadBehaviour="stretch"
            color="layer3"
            textColor="body"
            onPress={() => {
                setCurrentColorIndex(currentColorIndex === COLORS.length - 1 ? 0 : currentColorIndex + 1);
            }}
        />
    </PageContainer>;
};
export default Colors;
