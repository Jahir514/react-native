import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [isGameOver, setIsGameOver] = useState(true)
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }
  const gameOverHandler = () => {
    setIsGameOver(true)
  }
  let screen = <GameStartScreen pickedNumberHandler={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userInput={userNumber} onGameOver={gameOverHandler} />
    setIsGameOver(false)
  }
  if (isGameOver && userNumber) {
    screen = <GameOverScreen />
  }
  return (
    <>
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground source={require('./assets/images/dice.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.imageBackground}>
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>

    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  imageBackground: {
    opacity: 0.15
  }
});
