import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
const GoalInput = (props) => {
  const { goalAddHandler, modalVisible, goalCancelHandler } = props;
  const [inputText, setInputText] = useState('');
  const goalInputHandler = (text) => {
    setInputText(text);
  };
  const AddGoalHandler = () => {
    goalAddHandler(inputText);
    setInputText('');
  };
  return (
    <Modal visible={modalVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder='Type Your Goal!'
          onChangeText={goalInputHandler}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={AddGoalHandler} color='green' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel Goal' onPress={goalCancelHandler} color='red' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    flex: 1,
    backgroundColor: '#5e08cc'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    margin: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    padding: 8,
    color: '#ffffff'
  },
  modal: {
    backgroundColor: '#5e08cc'
  },
  image: {
    width: 80,
    height: 80,
    margin: 16
  }
});
