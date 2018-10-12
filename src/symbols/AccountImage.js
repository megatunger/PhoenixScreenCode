import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class AccountImage extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 150,
    height: 149
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.image}
          source={require("../assets/daniel-monteiro-643335-unsplash.jpg")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 149,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(210,210,210,1)"
  },
  root: {
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1
  }
});
