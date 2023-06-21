import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomSreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text> Sell what you don't need </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} color="primary" />
        <AppButton title={"Register"} color="secondary" />
      </View>

      {/* <View style={styles.loginButton} />
      <View style={styles.registerButton} /> */}
    </ImageBackground>
  );
}

export default WelcomSreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  // loginButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: "#fc5c65",
  // },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
});
