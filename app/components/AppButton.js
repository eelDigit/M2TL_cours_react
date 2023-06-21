import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={() => console.log("click")}
    >
      <View>
        <Text style={styles.text}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 70,
    // backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
  },
  text: {
    color: colors.light,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
