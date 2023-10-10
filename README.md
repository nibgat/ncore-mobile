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

### Example

```
yarn example-android
or
yarn example-ios
```

### Dependencies

If you install with yarn these packages will already be installed.

- ncore-context: >= 0.1.0-pre-alpha.6
- react-native-gesture-handler: >= 2.13.1
- react-native-modalize: >= 2.1.1
- react-native-portalize: >= 1.0.7
- react-native-simple-toast: >= 3.0.1
- react-native-svg: >= 13.14.0

### Base Library

-   The library is exporting sample base components to be used in react project you can test it like this :
    -   NPM: `npm install ncore-mobile react-native-gesture-handler react-native-modalize react-native-portalize react-native-svg react-native-simple-toast --save`
    -   YARN: `yarn add ncore-mobile`

```js
import React from 'react';
import {
    View
} from 'react-native';
import {
    NCoreTheme,
    NCore
} from "ncore-mobile";

const Home = () => {
    const {
        activeTheme,
        colors
    } = NCoreTheme.useContext();

    return <View
        style={{
            backgroundColor: colors.layer1,
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        }}
    >
        Welcome to Home Page. Your theme is: {activeTheme}
    </View>;
};

const App = () => {
    return <NCore.Provider>
        {your project codes... (navigation, etc.)}
    </NCore.Provider>;
}
export default App;
```

### License

MIT + NİBGAT® | License - OSL

### Discord

<a href="https://discord.gg/fMgVPZknuM">NİBGAT® | Community</a>
