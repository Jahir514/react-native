import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButtons';
import Card from '../components/ui/Card';
import Instruction from '../components/ui/Instruction';
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
  useEffect(() => {
    if (currentGuess === userInput) {
      onGameOver();
    }
  }, [currentGuess, userInput, onGameOver]);
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
  };

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
});
