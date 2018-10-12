import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class AccountHeader extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon
            style={styles.leftIcon}
            name="keyboard-backspace"
            type="MaterialCommunityIcons"
          />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={1}>
            Profile
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,87,34,1)",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    opacity: 1
  },
  leftIconButton: {
    top: 5,
    left: 5,
    position: "absolute",
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    left: 72,
    bottom: 19,
    position: "absolute"
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Roboto",
    lineHeight: 18,
    color: "#FFFFFF"
  }
});
