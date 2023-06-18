import { StyleSheet, View } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
export default function App() {

  return (
    <>
      <View style={styles.rootScreen}>
        <GameStartScreen />
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1
  }
});
