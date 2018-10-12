import React, { Component } from "react";
import Header from "../symbols/Header";
import ShopCardData from "../symbols/ShopCardData";
import { Center } from "@builderx/utils";
import Footer from "../symbols/Footer";

import { View, StyleSheet } from "react-native";

export default class Wishlist extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <ShopCardData style={styles.shopCardData} />
        </Center>
        <Header style={styles.header} />
        <ShopCardData style={styles.shopCardData2} />
        <ShopCardData style={styles.shopCardData3} />
        <Footer style={styles.footer} />
        <Footer style={styles.footer2} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(242,242,242,1)",
    flex: 1
  },
  header: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 80,
    width: 360
  },
  shopCardData: {
    position: "absolute",
    top: "14.63%",
    height: "17.68%",
    width: 345
  },
  shopCardData2: {
    top: 222.7,
    left: 6.93,
    position: "absolute",
    height: 114,
    width: 345
  },
  shopCardData3: {
    top: 355.05,
    left: 6.13,
    position: "absolute",
    height: 114,
    width: 345
  },
  footer: {
    top: 297.45,
    left: -503.18,
    position: "absolute",
    height: 56,
    width: 360
  },
  footer2: {
    top: 584,
    left: -0.5,
    position: "absolute",
    height: 55,
    width: 360
  }
});
