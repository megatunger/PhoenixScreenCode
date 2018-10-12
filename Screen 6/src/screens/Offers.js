import React, { Component } from "react";
import OfferCard from "../symbols/OfferCard";
import { Center } from "@builderx/utils";
import Header from "../symbols/Header";
import Footer from "../symbols/Footer";
import { View, StyleSheet } from "react-native";

export default class Offers extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <OfferCard style={styles.offerCard} />
        </Center>
        <Header style={styles.header} />
        <Center horizontal>
          <OfferCard style={styles.offerCard2} />
        </Center>
        <Footer style={styles.footer} />
        <Footer style={styles.lJEP1H} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  offerCard: {
    position: "absolute",
    top: "14.83%",

    height: "35.47%",
    width: 321
  },
  header: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 80,
    width: 360
  },
  offerCard2: {
    top: 337,
    position: "absolute",
    height: 226,
    width: 320
  },
  footer: {
    top: 584,
    left: 0,
    position: "absolute",
    height: 56,
    right: 0
  },
  lJEP1H: {
    top: 581.89,
    left: -3.06,
    position: "absolute",
    height: 56,
    width: 360
  }
});
