import { View, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButtons'
import { useState } from 'react'
const GameStartScreen = ({ pickedNumberHandler }) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const handleTextInput = (value) => {
        setEnteredNumber(value)
    }
    const resetTextInput = () => {
        setEnteredNumber('')
    }
    const confirmInputHandler = () => {
        const confirmNumber = parseInt(enteredNumber)

        if (isNaN(confirmNumber) || confirmNumber <= 0 || confirmNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{ text: 'okay', style: 'default', onPress: resetTextInput }])
            return
        } else {
            pickedNumberHandler(confirmNumber)
        }

    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} maxLength={2} keyboardType='number-pad' autoCorrect={false} autoCapitalize='none' onChangeText={handleTextInput} value={enteredNumber} />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <PrimaryButton buttonHandlerFunction={resetTextInput}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton buttonHandlerFunction={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>

        </View>
    )
}

export default GameStartScreen

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#3b021f',
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
