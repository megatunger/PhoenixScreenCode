import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Description extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 328,
    height: 136
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.new}>NEW</Text>
        <Text style={styles.loremIpsumIsSimpl}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
        <Text style={styles.description1}>Description</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  new: {
    top: "1.47%",
    left: "81.71%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.5,
    textAlign: "center",
    color: "rgba(230,74,25,1)"
  },
  loremIpsumIsSimpl: {
    top: 41,
    left: 0,
    width: 328,
    height: 95,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 24,
    color: "rgba(0,0,0,0.5413269928)"
  },
  description1: {
    right: 245,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 24,
    color: "rgba(0,0,0,0.87)"
  }
});
