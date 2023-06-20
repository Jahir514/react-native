import { View, Text, StyleSheet } from 'react-native'

const Title = ({ children }) => {
    return (
        <View >
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})
