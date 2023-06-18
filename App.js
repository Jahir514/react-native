import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalLists, setGoalLists] = useState([]);
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const goalAddHandler = (inputText) => {
    setGoalLists((prevInputText) => [
      ...prevInputText,
      { text: inputText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoalLists((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#5e08cc'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          goalAddHandler={goalAddHandler}
          goalCancelHandler={endAddGoalHandler}
          modalVisible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalLists}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceHorizontal={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
  },
});
