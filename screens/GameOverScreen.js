import { View, Text, StyleSheet, Image } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButtons';

const GameOverScreen = ({ pickedNumber, roundNumber, onNewGameStart }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imgageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>You Need <Text style={styles.highlight}>{roundNumber}</Text>  Moves to Guess <Text style={styles.highlight}>{pickedNumber}</Text> </Text>
      <PrimaryButton buttonHandlerFunction={onNewGameStart}>Start New Game</PrimaryButton>
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
  summaryText: {
    fontFamily: '',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    color: '#3b021f'
  }
});
