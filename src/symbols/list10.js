import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default class list10 extends Component {
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
              <Text style={styles.text1}>Three-line Item</Text>
              <Text style={styles.text2}>
                {" "}
                BuilderX is a screen design tool which codes React Native for\n
                you.
              </Text>
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
    height: 88,
    marginLeft: 16,
    padding: 16,
    paddingLeft: 0
  },
  text1: {
    paddingBottom: 8,
    fontSize: 16,
    color: "#212121"
  },
  text2: {
    fontSize: 13,
    lineHeight: 16,
    color: "#9E9E9E"
  }
});
