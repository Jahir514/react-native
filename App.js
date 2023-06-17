import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
export default function App() {
  const [inputText, setInputText] = useState('')
  const [goalLists, setGoalLists] = useState([])
  const goalInputHandler = (text) => {
    setInputText(text)
  }

  const goalAddHandler = () => {
    setGoalLists((prevInputText) => [...prevInputText, { text: inputText, id: Math.random.toString() }])
    console.log(goalLists)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Type Your Goal!' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={goalAddHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goalLists} renderItem={itemData => {
          return (
            <GoalItem itemData={itemData} />
          )
        }}
          alwaysBounceHorizontal={false}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 6
  }
});
