import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default class MyLoyaltyCard extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 345,
    height: 192
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Image
          style={styles.image}
          source={require("../assets/BigC-them-dai-chu-ky.jpg")}
        />
        <View style={styles.rect} />
        <Text style={styles.points}>You have: 200 points</Text>
        <Text style={styles.brandName}>Big C</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    width: 345,
    height: 192,
    position: "absolute",
    opacity: 1,
    borderRadius: 15
  },
  points: {
    left: 13,
    bottom: 50,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    lineHeight: 20,
    color: "rgba(255,255,255,1)"
  },
  brandName: {
    left: 13,
    bottom: 22,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
    lineHeight: 32,
    color: "rgba(255,255,255,1)"
  },
  rect: {
    top: 0,
    left: 0,
    width: 345,
    height: 192,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.2,
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    elevation: 6,
    shadowOpacity: 1
  }
});
