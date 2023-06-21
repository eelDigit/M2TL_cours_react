import React from "react";
import Screen from "../components/Screen";
import { FlatList } from "react-native";
import Card from "../components/Card";
const listing = [
  {
    id: 1,
    title: "red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "canapé en bonne condition",
    price: 1000,
    image: require("../assets/canape.webp"),
  },
];

function ListingSreen(props) {
  return (
    <Screen>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
      <Card />
    </Screen>
  );
}

export default ListingSreen;
