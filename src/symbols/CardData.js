import React, { Component } from "react";
import Card9 from "./card9";
import { View, StyleSheet } from "react-native";

export default class CardData extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 150,
    height: 100
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Card9 style={styles.card9} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card9: {
    width: 150,
    height: 100
  }
});
