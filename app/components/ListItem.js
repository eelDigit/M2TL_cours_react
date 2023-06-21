import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText> {title} </AppText>
        <AppText> {subTitle} </AppText>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.beige,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
  },
});
