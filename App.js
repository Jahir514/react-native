import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';

export default function App() {

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Text>Gueessing Game</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  }
});
