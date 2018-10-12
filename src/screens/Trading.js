import React, { Component } from "react";

import List151 from "../symbols/list151";
import List13 from "../symbols/list13";
import List4 from "../symbols/list4";
import List15 from "../symbols/list15";
import { View, StyleSheet } from "react-native";

export default class Trading extends Component {
  render() {
    return (
      <View style={styles.root}>
        <List151 style={styles.XzusqW} />
        <List13 style={styles.p75OnN} />
        <List4 style={styles.SQ0Fc8} />
        <List15 style={styles.IoaqKR} />
        <List13 style={styles.HzO44V} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  XzusqW: {
    top: 171.38,
    left: 3.63,
    position: "absolute",
    height: 500,
    width: 375
  },
  p75OnN: {
    top: 118.68,
    left: 135.3,
    position: "absolute",
    height: 500,
    width: 375
  },
  SQ0Fc8: {
    top: 97.54,
    left: 96.99,
    position: "absolute",
    height: 500,
    width: 375
  },
  IoaqKR: {
    top: 176.26,
    left: 118.59,
    position: "absolute",
    height: 500,
    width: 375
  },
  HzO44V: {
    top: 264.97,
    left: 243.13,
    position: "absolute",
    height: 500,
    width: 375
  }
});
