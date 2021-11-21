import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import {
    NCoreProvider,
    useNCoreModal
} from 'ncore-mobile';

const App = () => {
    const {
        
    } = useNCoreModal();

    return <NCoreProvider>
        <View style={styles.container}>
            <Text>Hello NİBGAT</Text>
        </View>
    </NCoreProvider>;
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    box: {
        marginVertical: 20,
        height: 60,
        width: 60
    }
});
export default App;