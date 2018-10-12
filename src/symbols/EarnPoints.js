import React, { Component } from "react";
import Card91 from "./card91";
import TheDuLieu from "./TheDuLieu";
import { View, Text, StyleSheet } from "react-native";

export default class EarnPoints extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 328,
    height: 377
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.text2} selectionColor="rgba(0,0,0,1)">
          Earn points by shops
        </Text>
        <View style={styles.cards}>
          <TheDuLieu style={styles.theDuLieu} />
          <Card91 style={styles.card912} />
          <Card91 style={styles.card913} />
          <Card91 style={styles.card914} />
          <Card91 style={styles.card915} />
          <Card91 style={styles.card916} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text2: {
    top: 0,
    left: 0,
    width: 268,
    height: 13,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    color: "rgba(230,74,25,1)"
  },
  cards: {
    top: 34,
    left: 1,
    width: 327,
    height: 343,
    position: "absolute"
  },
  card912: {
    top: "0%",
    left: "51.07%",
    width: 160,
    height: 100,
    position: "absolute"
  },
  card913: {
    top: "35.57%",
    left: "51.07%",
    width: 160,
    height: 100,
    position: "absolute"
  },
  card914: {
    top: "35.57%",
    left: 0,
    width: 160,
    height: 100,
    position: "absolute"
  },
  card915: {
    top: "70.85%",
    left: "51.07%",
    width: 160,
    height: 100,
    position: "absolute"
  },
  card916: {
    top: "70.85%",
    left: 0,
    width: 160,
    height: 100,
    position: "absolute"
  },
  theDuLieu: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 100,
    width: 160
  }
});
