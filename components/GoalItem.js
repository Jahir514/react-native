import { StyleSheet, View, Text } from 'react-native'
const GoalItem = ({ itemData }) => {
    return (
        <View style={styles.goalListItem} ><Text style={styles.goalText}>{itemData.item.text}</Text></View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalListItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
        padding: 8
    },
    goalText: {
        color: 'white'
    }
});