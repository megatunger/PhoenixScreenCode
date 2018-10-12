import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet, Text } from "react-native";

export default class OfferCard extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 320,
    height: 226
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect2}>
          <View style={styles.rect3} />
        </View>
        <View style={styles.rect4}>
          <Svg
            style={styles.svg}
            viewBox="0 0 134.00 38.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(151,151,151,1)"
              isClosed={true}
              d="M130.56 36.50 L2.44 36.50 C0.32 36.50 0.50 35.47 0.50 34.37 L0.50 2.37 C0.50 1.27 0.32 0.50 2.44 0.50 L130.56 0.50 C132.68 0.50 132.50 1.27 132.50 2.37 L132.50 34.37 C132.50 35.47 132.68 36.50 130.56 36.50 Z"
              fillOpacity={0.5}
              strokeOpacity={0.5}
            />
          </Svg>
          <Text style={styles.text}>GET</Text>
        </View>
        <Text style={styles.text2}>200 points</Text>
        <Text style={styles.text3}>Free 100 buffet meals</Text>
        <View style={styles.rect5}>
          <View style={styles.rect6} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect2: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    borderRadius: 2,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  rect3: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 2,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  rect4: {
    left: "29.69%",
    bottom: 11,
    width: 132,
    height: 36,
    position: "absolute"
  },
  svg: {
    top: "-1.39%",
    left: "-0.38%",
    width: "100.76%",
    height: "102.78%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text: {
    top: "19.44%",
    left: "40.15%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    color: "rgba(255,87,34,1)"
  },
  text2: {
    left: "41.25%",
    bottom: 54,
    width: 58,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    lineHeight: 16,
    color: "rgba(0,0,0,0.5392606431)"
  },
  text3: {
    left: "23.13%",
    bottom: 70,
    width: 173,
    height: 24,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(0,0,0,0.87)"
  },
  rect5: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "54.42%",
    position: "absolute"
  },
  rect6: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "99.60%",
    position: "absolute",
    backgroundColor: "rgba(209,211,212,1)",
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    overflow: "hidden"
  }
});
