import { View, Text, StyleSheet, Image } from 'react-native';
import Title from '../components/ui/Title';

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imgageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text>You Need X Moves to Guess Y</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#3b021f',
    margin: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
