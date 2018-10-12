import React, { Component } from "react";
import IconTextButtons from "./iconTextButtons";
import { View, StyleSheet } from "react-native";

export default class Footer extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 56
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <IconTextButtons style={styles.footer} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footer: {
    width: 360,
    height: 56
  }
});
