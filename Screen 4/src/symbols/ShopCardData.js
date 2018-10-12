import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Checkbox from "./checkbox";
import { View, StyleSheet, Text } from "react-native";

export default class ShopCardData extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 345,
    height: 114
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.borderContainercardBg}>
          <View style={styles.cardBg1} />
        </View>
        <View style={styles.bitmap}>
          <View style={styles.mask} />
        </View>
        <Center vertical>
          <Text style={styles.style2}>540 points</Text>
        </Center>
        <Text style={styles.itemHeadlineExampl}>Shop Name Example</Text>
        <Checkbox style={styles.checkbox} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  borderContainercardBg: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 2,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  cardBg1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 2,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  bitmap: {
    top: "20.00%",
    left: "4.65%",
    width: 72,
    height: 72,
    position: "absolute"
  },
  mask: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "rgba(209,211,212,1)",
    overflow: "hidden"
  },
  style2: {
    left: "32.85%",
    width: 75,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    lineHeight: 20,
    textAlign: "left",
    color: "rgba(255,87,34,1)"
  },
  itemHeadlineExampl: {
    top: "20.35%",
    left: 113,
    right: 60.66,
    height: 23,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    lineHeight: 20,
    color: "rgba(0,0,0,0.87)"
  },
  checkbox: {
    top: 68,
    left: 298,
    width: 28,
    height: 27,
    position: "absolute"
  }
});
