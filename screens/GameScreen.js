import { View, Text, StyleSheet, Alert } from 'react-native'
import Title from '../components/ui/Title'
import { useEffect, useState } from 'react'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButtons'
const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}
let minBoundary = 1
let maxBoundary = 100
const GameScreen = ({ userInput, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userInput)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userInput) || (direction === 'higher' && currentGuess > userInput)) {
            Alert.alert("Don't lie..", 'You konw that is wrong!!', [{ text: 'sorry', style: 'cancel' }])
            return
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const rndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(rndNum)
    }
    useEffect(() => {
        if (currentGuess === userInput) {
            onGameOver()
        }
    }, [currentGuess, userInput, onGameOver])
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton buttonHandlerFunction={() => nextGuessHandler('higher')}>+</PrimaryButton>
                    <PrimaryButton buttonHandlerFunction={() => nextGuessHandler('lower')}>-</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 26,
        marginTop: 30
    }
})
