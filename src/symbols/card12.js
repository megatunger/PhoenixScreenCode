import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class card12 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 206,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>Title goes here</Text>
            <Text style={styles.subtitleStyle}>Subtitle here</Text>
          </View>
          <Image
            style={styles.cardItemImagePlace}
            source={require("../assets/cardImage2.jpg")}
          />
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.actionText1}>ACTION 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.actionText2}>ACTION 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#000"
  },
  subtitleStyle: {
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
  },
  cardItemImagePlace: {
    width: 120,
    height: 120,
    backgroundColor: "#ccc",
    margin: 16
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionText1: {
    opacity: 0.9,
    fontSize: 14,
    color: "#000"
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    opacity: 0.9,
    fontSize: 14,
    color: "#000"
  }
});
