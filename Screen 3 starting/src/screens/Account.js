import React, { Component } from "react";
import AccountHeader from "../symbols/AccountHeader";

import Avatar from "../symbols/Avatar";
import List2 from "../symbols/list2";
import { View, StyleSheet } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <AccountHeader style={styles.accountHeader} />
        <Avatar style={styles.avatar} />
        <List2 style={styles.list2} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  accountHeader: {
    top: 0,
    position: "absolute",
    height: 55,
    width: 359.83,
    left: "0%"
  },

  avatar: {
    position: "absolute",
    top: 92,
    left: 110,
    height: 173,
    width: 141
  },
  list2: {
    top: 277,
    left: 2,
    position: "absolute",
    height: 363.07,
    width: 356
  }
});
