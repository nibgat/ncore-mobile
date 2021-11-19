import * as React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  NCore
} from 'ncore-mobile';

const App = () => {
  return <NCore>
    <View style={styles.container}>
      <Text>Hello NİBGAT</Text>
    </View>
  </NCore>;
}

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