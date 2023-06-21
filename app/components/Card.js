import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import ListItem from "./ListItem";

function Card() {
  return (
    <ListItem
      title="Red jacket for sale"
      subTitle="$100"
      image={require("./app/assets/jacket.jpg")}
    />
  );
}

export default Card;

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 15,
//     backgroundColor: colors.beige,
//     marginBottom: 20,
//     overflow: "hidden",
//   },
//   detailsContainer: {
//     padding: 20,
//   },
//   image: {
//     width: 300,
//     height: 200,
//   },
// });
