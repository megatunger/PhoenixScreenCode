import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, FlatList, StyleSheet, Image, Text } from "react-native";

export default class list5 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 500,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <FlatList
        style={[styles.root, this.props.style]}
        renderItem={({ item, separators }) => {
          return (
            <View style={styles.rect1}>
              <Image
                style={styles.avatarImageStyle}
                source={require("../assets/cardImage11.jpg")}
              />
              <View style={styles.content}>
                <Text style={styles.text1}>Single-line Item</Text>
              </View>
              <Icon
                style={styles.iconStyle}
                name="message"
                type="MaterialCommunityIcons"
              />
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 8
  },
  rect1: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16
  },
  avatarImageStyle: {
    width: 40,
    height: 40,
    backgroundColor: "#CCCCCC",
    borderRadius: 20
  },
  content: {
    left: 72,
    right: 0,
    height: 56,
    position: "absolute",
    justifyContent: "center",
    paddingRight: 16
  },
  text1: {
    fontSize: 16,
    color: "#212121"
  },
  iconStyle: {
    right: 16,
    position: "absolute",
    color: "#CCCCCC",
    fontSize: 24
  }
});
