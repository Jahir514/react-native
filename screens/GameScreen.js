import { View, Text, StyleSheet } from 'react-native'

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Game Screen</Text>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 26
    }
})
