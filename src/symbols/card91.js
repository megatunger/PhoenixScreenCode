import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image, Text } from "react-native";

export default class card91 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 10,
    width: 160,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../assets/nathan-dumlao-623124-unsplash.jpg")}
          style={styles.image}
        />
        <View style={styles.caption}>
          <View style={styles.rect} />
          <Text style={styles.text}>The Coffee Shop</Text>
          <Text style={styles.text2}>1000 points per cup</Text>
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
  image: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  caption: {
    height: 46,
    width: 160,
    top: 55,
    left: 0,
    position: "absolute"
  },
  rect: {
    top: 0,
    left: 0,
    width: 160,
    height: 46,
    position: "absolute",
    backgroundColor: "rgba(67,67,67,1)",
    opacity: 0.67
  },
  text: {
    top: 5,
    left: "5.63%",
    width: 109,
    height: 25,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },
  text2: {
    top: 22,
    left: "5.63%",
    width: 129,
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 10,
    color: "rgba(173,173,173,1)"
  }
});
