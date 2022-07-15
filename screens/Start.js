import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/color";

export default function Start(props) {


  return (
    <View style={styles.inputContainer}>
      <Pressable onPress={props.onPress} style={styles.buttonContainer}>
        <Text>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
    elevation: 24, //box-shadow
    //shadowColor: 'black', ios props
    //shadowOpacity: 1
  },
  buttonContainer: {
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 40,
    borderRadius: 8,
  }
});
