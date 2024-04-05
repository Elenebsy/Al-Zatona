import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ForgetPassword from "../screens/ForgetPassword";



export default function welcome() {
  return (
    <View style={styles.container}>
      <ForgetPassword/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
