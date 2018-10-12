import React, { Component } from "react";
import { View } from "react-native";

export default class LineBreak extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 2
  };
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(189,189,189,1)",
    opacity: 0.5
  }
});
