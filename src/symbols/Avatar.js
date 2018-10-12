import React, { Component } from "react";
import AccountImage from "./AccountImage";
import { View, StyleSheet, Text } from "react-native";

export default class Avatar extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 151,
    height: 184
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <AccountImage style={styles.accountImage} />
        <Text style={styles.text}>Susan Turkey</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  accountImage: {
    top: 0,
    left: 0,
    width: 150,
    height: 149,
    position: "absolute"
  },
  text: {
    top: 161,
    left: "5.3%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24
  }
});
