import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function MyButton ({ onPress, style, children, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: color || "red",
          opacity: pressed ? 0.2 : 1,
        },
        styles.wrapperCustom,
        style || {}
      ]}
    >
      <Text>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    padding: 8,
  },
});
