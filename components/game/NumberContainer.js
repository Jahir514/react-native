import { View, Text, StyleSheet } from 'react-native'

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer
const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 4,
        borderColor: '#ddb52f',
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: '#ddb52f',
        fontWeight: 'bold',
        fontSize: 36
    }
})
