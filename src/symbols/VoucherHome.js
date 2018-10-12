import React, { Component } from "react";
import Carousal1 from "./carousal1";
import { View, StyleSheet, Text } from "react-native";

export default class VoucherHome extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 186
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.text}>Use your points to get voucher</Text>
        <Carousal1 style={styles.carousal1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    top: 166,
    left: "19.17%",
    width: 236,
    height: 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    textAlign: "center",
    color: "rgba(117,117,117,1)"
  },
  carousal1: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 160,
    width: 360
  }
});
