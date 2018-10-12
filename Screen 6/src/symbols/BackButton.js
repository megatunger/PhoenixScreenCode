import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class BackButton extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 80
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.bounds} />
        <View style={styles.iconsNavigation24PxWhiteBackArrow}>
          <View style={styles.bounds1} />
          <Svg
            style={styles.shape}
            viewBox="0 0 16.00 16.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={0}
              fill="rgba(89,89,89,1)"
              isClosed={true}
              d="M16.00 7.00 L3.80 7.00 L9.40 1.40 L8.00 0.00 L0.00 8.00 L8.00 16.00 L9.40 14.60 L3.80 9.00 L16.00 9.00 L16.00 7.00 L16.00 7.00 Z"
            />
          </Svg>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bounds: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    display: "none",
    backgroundColor: "rgba(32,150,243,1)",
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 4
  },
  iconsNavigation24PxWhiteBackArrow: {
    top: "50.00%",
    left: "4.44%",
    width: "6.67%",
    height: "30.00%",
    position: "absolute"
  },
  bounds1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "transparent"
  },
  shape: {
    top: "16.67%",
    left: "16.67%",
    width: "66.67%",
    height: "66.67%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
