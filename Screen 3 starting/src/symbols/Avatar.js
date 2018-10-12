import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default class Avatar extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 141,
    height: 173
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Image
          style={styles.image}
          source={require("../assets/allie-smith-1083399-unsplash.jpg")}
        />
        <Text style={styles.name}>Susan Moore</Text>
        <Text style={styles.points}>231 points</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    left: "3.55%",
    bottom: 43,
    width: 130,
    height: 130,
    position: "absolute",
    borderRadius: 100
  },
  name: {
    top: 135,
    left: "0%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    color: "rgba(33,33,33,1)"
  },
  points: {
    top: 161,
    left: "26.95%",
    bottom: 0,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    textAlign: "center",
    color: "rgba(117,117,117,1)"
  }
});
