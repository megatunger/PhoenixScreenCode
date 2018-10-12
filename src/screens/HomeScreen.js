import React, { Component } from "react";
import Header1 from "../symbols/header1";
import IconTextButtons from "../symbols/iconTextButtons";
import Card91 from "../symbols/card91";
import Divider from "../symbols/Divider";
import EarnPoints from "../symbols/EarnPoints";

import { View, StyleSheet, StatusBar, Text } from "react-native";

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
        <EarnPoints style={styles.earnPoints} />
        <Divider style={styles.divider} />
        <Text style={styles.text}>Use your points to get voucher</Text>
        <Card91 style={styles.card91} />
        <Text style={styles.text2} selectionColor="rgba(0,0,0,1)">
          Earn points by shops
        </Text>
        <Card91 style={styles.card912} />
        <Card91 style={styles.card913} />
        <Card91 style={styles.card914} />
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
    height: 79.91,
    width: 360
  },
  iconTextButtons: {
    top: 583,
    left: 0,
    position: "absolute",
    height: 57,
    width: 360
  },
  text: {
    height: 20,
    width: 236,
    top: 246,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(117,117,117,1)",
    left: "19.17%"
  },
  card91: {
    left: 20,
    position: "absolute",
    width: 160,
    height: 100,
    top: "49.9%"
  },
  divider: {
    position: "absolute",
    top: 266,
    left: 0,
    right: 0,
    height: 1
  },
  text2: {
    height: 13,
    width: 267.48,
    top: 284,
    left: 19,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    color: "rgba(230,74,25,1)"
  },
  card912: {
    top: "49.84%",
    width: 160,
    height: 100,
    position: "absolute",
    left: "51.94%"
  },
  card913: {
    top: "49.84%",
    left: "51.94%",
    width: 160,
    height: 100,
    position: "absolute"
  },
  card914: {
    top: "49.9%",
    left: 20,
    width: 160,
    height: 100,
    position: "absolute"
  },
  earnPoints: {
    top: 284,
    left: 14,
    width: 328,
    height: 377,
    position: "absolute"
  }
});
