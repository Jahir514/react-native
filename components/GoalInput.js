import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';
const GoalInput = (props) => {
  const { goalAddHandler, modalVisible } = props;
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
        <TextInput
          style={styles.textInput}
          placeholder='Type Your Goal!'
          onChangeText={goalInputHandler}
          value={inputText}
        />
        <Button title='Add Goal' onPress={AddGoalHandler} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
