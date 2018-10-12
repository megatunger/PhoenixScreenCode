import React, { Component } from "react";
import Header from "../symbols/Header";
import Footer from "../symbols/Footer";
import MyLoyaltyCard from "../symbols/MyLoyaltyCard";
import { Center } from "@builderx/utils";
import Bound from "../symbols/Bound";
import { View, StyleSheet } from "react-native";

export default class LoyaltyCards extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header style={styles.header} />
        <Bound style={styles.bound} />
        <Center horizontal>
          <MyLoyaltyCard style={styles.myLoyaltyCard} />
        </Center>
        <Center horizontal>
          <MyLoyaltyCard style={styles.myLoyaltyCard2} />
        </Center>
        <Center horizontal>
          <MyLoyaltyCard style={styles.myLoyaltyCard3} />
        </Center>
        <Footer style={styles.footer} />
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
  footer: {
    top: 585,
    left: 0.5,
    position: "absolute",
    height: 55,
    width: 360
  },
  myLoyaltyCard: {
    position: "absolute",
    top: "14.69%",
    height: "30%",
    width: 345
  },
  bound: {
    position: "absolute",
    top: 79.3,
    left: 0,
    height: 73,
    width: 360.06
  },
  myLoyaltyCard2: {
    width: 345,
    height: 192,
    position: "absolute",
    top: "46.88%"
  },
  myLoyaltyCard3: {
    top: "79.06%",
    width: 345,
    height: 192,
    position: "absolute"
  }
});
