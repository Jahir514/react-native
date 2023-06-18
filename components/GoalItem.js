import { StyleSheet, View, Text, Pressable } from 'react-native';
const GoalItem = (props) => {
  const { itemData, deleteGoalHandler } = props;
  return (
    <View style={styles.goalListItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }} //for android
        onPress={() => deleteGoalHandler(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem} // for iOs
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalListItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
