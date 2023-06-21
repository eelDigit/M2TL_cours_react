import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    padding: Constant.statuBarHeight,
    flex: 1,
  },
});
