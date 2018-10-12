import React, { Component } from "react";
import BackButton from "../symbols/BackButton";
import DataHeader from "../symbols/DataHeader";
import Description from "../symbols/Description";
import { Center } from "@builderx/utils";
import BottomButton from "../symbols/BottomButton";
import { View, StyleSheet } from "react-native";

export default class Android extends Component {
  render() {
    return (
      <View style={styles.root}>
        <DataHeader style={styles.dataHeader} />
        <Center horizontal>
          <Description style={styles.description} />
        </Center>
        <BottomButton style={styles.bottomButton} />
        <BackButton style={styles.backButton} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  backButton: {
    position: "absolute",
    top: "0%",
    left: "0%",
    height: "12.5%",
    width: "100%"
  },
  dataHeader: {
    position: "absolute",
    top: 300,
    left: 0,
    height: 72,
    width: 360
  },
  description: {
    position: "absolute",
    top: "60.78%",
    height: "21.25%",
    width: 328
  },
  bottomButton: {
    position: "absolute",
    top: 561,
    left: 0,
    height: 79,
    width: 360
  }
});
