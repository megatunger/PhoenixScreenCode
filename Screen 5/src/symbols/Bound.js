import React, { Component } from "react";
import { View } from "react-native";

export default class Bound extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 73
  };
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,87,34,1)",
    opacity: 1
  }
});
