import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class iconTextButtons extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 36,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.activeButtonWrapper}>
          <Icon
            style={styles.activeIcon}
            name="home-circle"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.activeContent}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Icon
            style={styles.icon1}
            name="account-heart"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.content1}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper2}>
          <Icon
            style={styles.icon2}
            name="wallet-giftcard"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.content2}>Voucher</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Icon
            style={styles.icon3}
            name="coin"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.text}>Trading</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },

  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  content1: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  },
  activeButtonWrapper: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    width: 90
  },
  activeIcon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "rgba(230,74,25,1)",
    fontSize: 24
  },
  activeContent: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "rgba(230,74,25,1)"
  },
  buttonWrapper2: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  content2: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  },
  button3: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    width: 90
  },
  button4: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  text: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  }
});
