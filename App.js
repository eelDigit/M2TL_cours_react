// import {
//   Platform,
//   View,
//   StatusBar,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Image,
//   TouchableOpacity,
//   Button,
//   TouchableHighlight,
// } from "react-native";

// export default function App() {
//   // console.log("app running");

//   return (
//     <View style={styles.containerView}>
//       {/* <View
//         style={{
//           backgroundColor: "teal",
//           width: 100,
//           height: 100,
//           alignSelf: "center",
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 200,
//           alignSelf: "center",
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",

//           width: 100,
//           height: 300,
//           alignSelf: "center",
//         }}
//       /> */}
//       {/* <Text  numberOfLines={1}>  Sale it  all ! voici un text très long et je le veux encore plus long </Text> */}

//       <TouchableOpacity onPress={() => console.log("image tapped")}>
//         <Image
//           source={{
//             width: 200,
//             height: 300,
//             uri: "https://picsum.photos/id/237/200/300",
//           }}
//         />
//       </TouchableOpacity>

//       <TouchableHighlight>
//         <Button
//           title="Click me !"
//           color="orange"
//           onPress={() => console.log("click")}
//         />
//       </TouchableHighlight>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   containerView: {
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     backgroundColor: "red",
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// // ======================================================

import React from "react";
// import WelcomSreen from "./app/screens/WelcomSreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

function App(props) {
  return <ViewImageScreen />;
}

export default App;
