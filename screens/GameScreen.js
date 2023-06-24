import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButtons';
import Card from '../components/ui/Card';
import Instruction from '../components/ui/Instruction';
import GuessLog from '../components/game/GuessLog';
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userInput, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userInput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessNumber, setGuessNumber] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userInput) {
      onGameOver(guessNumber.length);
      //for resetting boundary
      // minBoundary = 1;
      // maxBoundary = 100;
    }
  }, [currentGuess, userInput, onGameOver]);
  //when start new game, reset boundary
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userInput) ||
      (direction === 'higher' && currentGuess > userInput)
    ) {
      Alert.alert("Don't lie..", 'You konw that is wrong!!', [
        { text: 'sorry', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const rndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(rndNum);
    setGuessNumber((prevRndNumber) => [rndNum, ...prevRndNumber])
  };

  const guessNumberLength = guessNumber.length

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction>Higher or lower?</Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton
              buttonHandlerFunction={() => nextGuessHandler('higher')}
            >
              +
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton
              buttonHandlerFunction={() => nextGuessHandler('lower')}
            >
              -
            </PrimaryButton>
          </View>
        </View>
      </Card>

      {/* <View>
        {guessNumber.map((guess) => <Text key={guess}>{guess}</Text>)}
      </View> */}
      <View style={styles.listContainer}>
        <FlatList data={guessNumber} renderItem={(itemData) => <GuessLog guess={itemData.item} roundNumber={guessNumberLength - itemData.index} />} keyExtractor={(item) => item} />
      </View>

    </View>

  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 26,
    marginTop: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 10
  }
});
