<p align="center">
    <img
        width="450"
        height="450"
        src="https://ncore.nibgat.space/assets/images/darklogo.png"
    />
    <br/>
    <span style="font-size: 24px; font-weight: bold; text-align: center; width: 100%;">NİBGAT® | NCore Mobile Component Library</span>
    <br/>
    <br/>
</p>

### Documentation

Please visit for docs: [NCore Mobile](https://ncore.nibgat.space/mobile)

### Dependencies

If you install with yarn these packages will already be installed.

- immer@9.0.12
- react-native-gesture-handler@2.3.2
- react-native-modalize@2.0.13
- react-native-portalize@1.0.7
- react-native-simple-toast@1.1.3
- react-native-svg@12.3.0

### Base Library

-   The library is exporting sample base components to be used in react project you can test it like this :
    -   NPM: `npm install ncore-mobile react-native-gesture-handler react-native-modalize react-native-portalize react-native-svg react-native-simple-toast --save`
    -   YARN: `yarn add ncore-mobile`

```js
import {
    NCoreProvider,
    useNCoreTheme,
    Button
} from 'ncore-mobile';

const Home = () => {
    const {
        activeTheme,
        colors
    } = useNCoreTheme();

    return <View
        style={{
            backgroundColor: colors.background,
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        }}
    >
        Welcome to Home Page. Your theme is: {activeTheme}
    </View>;
};

const App = () => {
    return <NCoreProvider>
        {your project codes... (navigation, etc.)}
    </NCoreProvider>;
}
```

### Discord

<a href="https://discord.gg/fMgVPZknuM">NİBGAT® | Community</a>
