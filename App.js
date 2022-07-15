import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import bg from "./assets/background.png";
import Colors from "./constants/color";
import Start from "./screens/Start";
import Game from "./screens/Game";

export default function App() {

  const [startGame, setStartGame] = useState(false);

  function changeScreen() {
    console.log('pressed');
    setStartGame(!startGame);
  }

  return (
    <LinearGradient colors={[Colors.gradientPrimary, Colors.gradientSecondary]} style={styles.rootScreen}>
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {startGame ? <Game onPress={changeScreen}/> : <Start onPress={changeScreen}/>}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
