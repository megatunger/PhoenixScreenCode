import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class BottomButton extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 79
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.bg} />
        <View style={styles.buttonsRaisedNormalLight}>
          <View style={styles.buttonBg} />
          <Text style={styles.getThisOffer}>GET THIS OFFER</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(230,74,25,1)"
  },
  buttonsRaisedNormalLight: {
    top: "18.99%",
    left: "4.44%",
    width: "91.11%",
    height: "60.76%",
    position: "absolute"
  },
  buttonBg: {
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
  getThisOffer: {
    top: "33.33%",
    left: "15.91%",
    width: "69.32%",
    height: "39.58%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.5,
    textAlign: "center",
    color: "rgba(230,74,25,1)"
  }
});
