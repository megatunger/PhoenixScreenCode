import React, { Component } from "react";
import Card91 from "./card91";
import { View, StyleSheet } from "react-native";

export default class Card extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 160,
    height: 100
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Card91 style={styles.card91} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card91: {
    width: 160,
    height: 100
  }
});
