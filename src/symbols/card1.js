import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class card1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 282,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/cardImage5.jpg")}
        />
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            BuilderX is a screen design tool which codes React Native for you.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 210
  },
  body: {
    padding: 16
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#424242"
  }
});
