import React, { Component } from "react";
import Card from "./Card";
import { View, StyleSheet } from "react-native";

export default class TheDuLieu extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 160,
    height: 100
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Card style={styles.card917} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card917: {
    width: 160,
    height: 100
  }
});
