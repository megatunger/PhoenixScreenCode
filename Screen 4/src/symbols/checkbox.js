import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class checkbox extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 40,
    width: 40,
    defaultHeight: "auto",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Icon
          style={styles.checkIcon}
          name={
            this.props.checked ? "checkbox-marked" : "checkbox-blank-outline"
          }
          type="MaterialCommunityIcons"
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 20
  },
  checkIcon: {
    color: "rgba(255,87,34,1)",
    fontSize: 28
  }
});
