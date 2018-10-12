import React, { Component } from "react";
import Header1 from "../symbols/header1";
import IconTextButtons from "../symbols/iconTextButtons";
import { Center } from "@builderx/utils";
import Card9 from "../symbols/card9";
import CardData from "../symbols/CardData";
import Carousal1 from "../symbols/carousal1";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="dark-content"
          style={styles.statusBar}
          hidden={true}
        />
        <View style={styles.voucherData}>
          <Carousal1 style={styles.carousal1} />
          <Text style={styles.text}>Use your points to get voucher</Text>
        </View>
        <Card9 style={styles.LKOLaR} />
        <View style={styles.earnPointData}>
          <Text style={styles.text2}>Earn you points by shops</Text>
          <View style={styles.cards}>
            <CardData style={styles.cardData2} />
            <CardData style={styles.cardData3} />
            <CardData style={styles.cardData4} />
            <CardData style={styles.cardData5} />
            <CardData style={styles.cardData6} />
            <CardData style={styles.cardData} />
          </View>
        </View>
        <IconTextButtons style={styles.footer} />
        <Header1 style={styles.header1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  statusBar: {},
  header1: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 80,
    width: 360
  },
  footer: {
    top: 583,
    left: 0,
    position: "absolute",
    height: 56,
    width: 360
  },
  LKOLaR: {
    top: "48.44%",
    left: 21,
    width: 150,
    height: 100,
    position: "absolute"
  },
  earnPointData: {
    height: 354,
    width: 318,
    top: 283,
    left: 16,
    position: "absolute"
  },
  text2: {
    top: 0,
    left: "0%",
    width: 213,
    height: 14,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    color: "rgba(255,87,34,1)"
  },
  cards: {
    top: 26,
    left: 7,
    width: 311,
    height: 328,
    position: "absolute"
  },
  cardData2: {
    top: 0,
    left: "51.92%",
    width: 150,
    height: 101,
    position: "absolute"
  },
  cardData3: {
    top: 113,
    left: "51.92%",
    width: 150,
    height: 101,
    position: "absolute"
  },
  cardData4: {
    top: 113,
    left: 0,
    width: 150,
    height: 101,
    position: "absolute"
  },
  cardData5: {
    top: 227,
    left: "51.92%",
    width: 150,
    height: 101,
    position: "absolute"
  },
  cardData6: {
    top: 227,
    left: 0,
    width: 150,
    height: 101,
    position: "absolute"
  },
  cardData: {
    top: 0,
    left: 0,
    width: 150,
    height: 100,
    position: "absolute"
  },
  voucherData: {
    height: 183,
    width: 360,
    top: 80,
    left: 0,
    position: "absolute"
  },
  carousal1: {
    top: 0,
    left: 0,
    right: 0,
    height: 160,
    position: "absolute"
  },
  text: {
    top: 169,
    left: "24.72%",
    width: 188,
    height: 14,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "Roboto-Light",
    textAlign: "center",
    color: "rgba(117,117,117,1)"
  }
});
