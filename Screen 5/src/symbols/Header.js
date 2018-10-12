import React, { Component } from "react";
import Header1 from "./header1";
import { View, StyleSheet } from "react-native";

export default class Header extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 80
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Header1 style={styles.header1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header1: {
    width: 360,
    height: 80
  }
});
