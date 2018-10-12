import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class header1 extends Component {
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
          <Text style={styles.qrLabel}>QR Scan</Text>
          <Icon
            style={styles.leftIcon}
            name="qrcode-scan"
            type="MaterialCommunityIcons"
          />
        </TouchableOpacity>
        <Center>
          <View style={styles.textWrapper}>
            <Text style={styles.title} numberOfLines={1}>
              Phoenix
            </Text>
          </View>
        </Center>
        <TouchableOpacity style={styles.rightIconButton}>
          <Icon
            style={styles.rightIcon}
            name="account-circle"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.name}>Tùng</Text>
        </TouchableOpacity>
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
    top: 10,
    left: 15.92,
    position: "absolute",
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    position: "absolute"
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "Roboto",
    lineHeight: "140%",
    color: "#FFFFFF",
    letterSpacing: 0
  },
  rightIconButton: {
    top: 10,
    right: 15,
    position: "absolute",
    alignItems: "center",
    padding: 11
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  qrLabel: {
    top: 44,
    left: -3,
    width: 53,
    height: 14,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },
  name: {
    top: 41,
    left: 8,
    width: 31,
    height: 13,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  }
});
