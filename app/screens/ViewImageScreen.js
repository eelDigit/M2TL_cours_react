import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcone}>
        <MaterialCommunityIcons name="close" color="white" />
      </View>
      <View style={styles.deleteIcone} />
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  closeIcone: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    top: 40,
    left: 30,
    position: "absolute",
  },
  deleteIcone: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    top: 40,
    right: 30,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
