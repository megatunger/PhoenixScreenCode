import React, { Component } from "react";
import Header1 from "../symbols/header1";
import { View, StyleSheet } from "react-native";

export default class Trading extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header1 style={styles.header1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  header1: {
    top: 0,
    left: 0,
    width: 360,
    height: 56,
    position: "absolute"
  }
});
