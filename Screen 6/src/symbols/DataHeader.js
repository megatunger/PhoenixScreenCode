import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DataHeader extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 72
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.tabPrice}>
          <View style={styles.borderContainerrectangle}>
            <View style={styles.rectangle1} />
          </View>
          <Text style={styles.forLotusRestaurant}>
            for Lotus Restaurant’s member
          </Text>
          <Text style={styles.free100BuffetMeal}>Free 100 buffet meals</Text>
          <Text style={styles.pts}>200pts</Text>
        </View>
        <View style={styles.image}>
          <View style={styles.mask} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabPrice: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  borderContainerrectangle: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  rectangle1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  forLotusRestaurant: {
    left: 16,
    bottom: 9,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    lineHeight: 20,
    color: "rgba(0,0,0,0.5438462409)"
  },
  free100BuffetMeal: {
    top: 10,
    left: 16,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
    lineHeight: 32,
    color: "rgba(0,0,0,0.87)"
  },
  pts: {
    bottom: 15,
    right: 16,
    width: 70,
    height: 24,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(0,0,0,0.87)"
  },
  image: {
    top: -300,
    left: 0,
    width: 360,
    height: 300,
    position: "absolute"
  },
  mask: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "rgba(216,216,216,1)",
    overflow: "hidden"
  }
});
