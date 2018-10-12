import React, { Component } from "react";
import AccountHeader from "../symbols/AccountHeader";
import { Center } from "@builderx/utils";
import Avatar from "../symbols/Avatar";
import { View, StyleSheet } from "react-native";

export default class Account extends Component {
  render() {
    return (
      <View style={styles.root}>
        <AccountHeader style={styles.header3} />
        <Avatar style={styles.avatar} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  header3: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 56,
    width: 360
  },
  avatar: {
    position: "absolute",
    top: 79,
    left: 105,
    height: 184,
    width: 151
  }
});
