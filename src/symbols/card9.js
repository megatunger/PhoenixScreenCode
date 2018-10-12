import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, Image } from "react-native";

export default class card9 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 10,
    width: 150,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.image}
          source={require("../assets/nathan-dumlao-623124-unsplash.jpg")}
        />
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>The Coffee Shop</Text>
            <Text style={styles.subtitleStyle}>1000 points</Text>
          </View>
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
    left: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.2)",
    width: 150,
    height: 36
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    transform: [
      {
        rotate: "3.6deg"
      }
    ],
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 150
  },
  titleStyle: {
    paddingBottom: 12,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#FFF",
    alignSelf: "stretch",
    position: "absolute",
    top: "15%",
    left: "5.33%",
    lineHeight: 14,
    letterSpacing: 0
  },
  subtitleStyle: {
    opacity: 0.5,
    fontSize: 10,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#FFF",
    alignSelf: "stretch",
    position: "absolute",
    top: 19,
    left: 8,
    height: 16,
    width: 56
  },
  image: {
    top: 0,
    left: 0,
    width: 148,
    height: 98,
    position: "absolute"
  }
});
