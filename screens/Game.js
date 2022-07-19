import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  Text,
  ToastAndroid,
  Alert,
} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { useState } from "react";
import Colors from "../constants/color";

const pcNumber = Math.floor(Math.random() * 100);

export default function Game(props) {
  const [userNumber, setUserNumber] = useState();
  const [tries, setTries] = useState(0);

  function inputHandler(input) {
    setUserNumber(input);
  }

  function back() {
    console.log("back");
    props.onPress();
  }

  console.log("choice", pcNumber);

  function confirmHandler() {
    const diff = Math.abs(pcNumber - userNumber);
    if (diff === 0) {
      Alert.alert("Congrats!", `You took ${tries} tries to guess the number`, [
        { text: "Close", style: "destructive", onPress: back },
      ]);
      return;
    } else if (diff <= 3) {
      ToastAndroid.show("Veeery Hot", ToastAndroid.SHORT);
    } else if (diff <= 6) {
      ToastAndroid.show("Hot hot hot", ToastAndroid.SHORT);
    } else if (diff <= 12) {
      ToastAndroid.show("Hot", ToastAndroid.SHORT);
    } else if (diff <= 20) {
      ToastAndroid.show("Warm", ToastAndroid.SHORT);
    } else if (diff <= 30) {
      ToastAndroid.show("Cold", ToastAndroid.SHORT);
    } else if (diff <= 40) {
      ToastAndroid.show("Ice Cold", ToastAndroid.SHORT);
    } else if (diff <= 48) {
      ToastAndroid.show("Very Cold", ToastAndroid.SHORT);
    } else if (diff > 48) {
      ToastAndroid.show("Veeeery Cold", ToastAndroid.SHORT);
    }
    setTries(tries + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.backButton}>
          <Pressable onPress={props.onPress}>
          <Ionicons name="arrow-back" size={24} />
          </Pressable>
        </View>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          
          onChangeText={inputHandler}
          value={userNumber}
        />
        <View style={styles.buttonsContainer}>
          <View s>
            <Button title="Confirm" onPress={confirmHandler} />
          </View>
        </View>
      </View>
      <View style={styles.triesLabel}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tries: {tries}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.gradientPrimary,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    elevation: 24,
  },
  buttonContainer: {
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    color: Colors.yellow,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  triesLabel: {
    marginHorizontal: 24,
  },
  backButton: {
    alignSelf: "flex-start",
  },
});
