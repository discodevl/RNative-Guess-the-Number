import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/color";

export default function Start(props) {
  return (
    <>
      <View style={styles.label}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          Welcome to guess the number!{" "}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Pressable onPress={props.onPress} style={styles.buttonContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>START</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 150,

    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 100,
    // marginHorizontal: 24,
    // padding: 16,
    // backgroundColor: Colors.gradientPrimary,
    // borderColor: "black",
    // borderWidth: 1,
    // borderRadius: 8,
    // elevation: 24, //box-shadow
    //shadowColor: 'black', ios props
    //shadowOpacity: 1
  },
  buttonContainer: {
    borderColor: "black",
    height: "30%",
    width: "50%",
    borderWidth: 1,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gradientPrimary,
  },
});
