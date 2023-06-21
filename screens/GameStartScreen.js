import { View, TextInput, Text, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButtons';
import { useState } from 'react';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import Instruction from '../components/ui/Instruction';
const GameStartScreen = ({ pickedNumberHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleTextInput = (value) => {
    setEnteredNumber(value);
  };
  const resetTextInput = () => {
    setEnteredNumber('');
  };
  const confirmInputHandler = () => {
    const confirmNumber = parseInt(enteredNumber);

    if (isNaN(confirmNumber) || confirmNumber <= 0 || confirmNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'okay', style: 'default', onPress: resetTextInput }]
      );
      return;
    } else {
      pickedNumberHandler(confirmNumber);
    }
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card style={styles.inputContainer}>
        <Instruction style={styles.guideText}>Enter a Number</Instruction>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={handleTextInput}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton buttonHandlerFunction={resetTextInput}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton buttonHandlerFunction={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb53f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
