import React from "react";
import { Text, View, StyleSheet } from "react-native";
//import  MyButton  from "../../../components/MyButton";
import {Link} from 'expo-router';
export default function courses() {

  return (
    <View style={styles.container}>
      <Link href="/modules" style={{color: 'blue', fontSize: 20}}>Modules</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
