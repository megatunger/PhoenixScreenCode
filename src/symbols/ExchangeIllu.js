import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, Image } from "react-native";

export default class ExchangeIllu extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 359,
    height: 188
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.text}>
          Make an coin exchange with other users. So you can get the voucher
          your want.
        </Text>
        <Image
          style={styles.image}
          source={require("../assets/david-shares-630745-unsplash.jpg")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    top: "80.32%",

    width: 276,
    height: 32,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    textAlign: "center",
    color: "rgba(117,117,117,1)",
    left: "12.26%"
  },
  image: {
    top: "0%",
    left: 0,
    right: 0,
    height: 144,
    position: "absolute"
  }
});
