import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { colors } from "../utils/colors";

const Button = ({ text, action }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.secondary,
  },
});

export default Button;
