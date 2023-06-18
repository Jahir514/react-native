import { View, Text, TextInput, StyleSheet } from 'react-native'
import PrimaryButton from '../components/buttons/PrimaryButtons'
const GameStartScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} maxLength={2} keyboardType='number-pad' autoCorrect={false} autoCapitalize='none' />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>

        </View>
    )
}

export default GameStartScreen

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#4e0329',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        elevation: 4, //like boxShadow in css; its only for android
        shadowColor: 'black', //same as elevation ; all shadow property is for iOS
        shadowOffset: { width: 0, height: 2 }, //width for left-right and hight for top-bottom
        shadowRadius: 6,
        shadowOpacity: .25,
        alignItems: 'center',
        justifyContent: 'center'
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
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    }
})
