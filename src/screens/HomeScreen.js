import React, { Component } from "react";
import Header1 from "../symbols/header1";
import IconTextButtons from "../symbols/iconTextButtons";
import { View, StyleSheet, StatusBar } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="dark-content"
          style={styles.statusBar}
          hidden={true}
        />
        <Header1 style={styles.header1} />
        <IconTextButtons style={styles.iconTextButtons} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  statusBar: {},
  header1: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 56,
    width: 360
  },
  iconTextButtons: {
    top: 583,
    left: 0,
    position: "absolute",
    height: 57,
    width: 360
  }
});
