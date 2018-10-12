import React, { Component } from "react";
import Swiper from "@builderx/react-native-swiper";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default class carousal1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 160,
    width: 36,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Swiper
          style={styles.carousel1}
          dotStyle={{}}
          activeDotStyle={{}}
          buttonTextStyle={{}}
          index={0}
        >
          <View style={styles.rect1}>
            <Text style={styles.text1}>Page 1</Text>
            <Image
              source={require("../assets/kristaps-grundsteins-625228-unsplash.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.rect3}>
            <Image
              source={require("../assets/kristaps-grundsteins-625228-unsplash.jpg")}
              style={styles.image2}
            />
          </View>
        </Swiper>
        <ImageBackground
          style={styles.mask}
          source={require("../assets/Gradient_fx887rP.png")} /*gradient: {"activeIndex":1,"from":{"x":1,"y":0.5000000000000001},"gradientType":"LinearGradient","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(229,64,12,1)","style":{}},{"offset":1,"stopColor":"rgba(255,137,101,1)","style":{}}],"style":{},"to":{"x":-5.551115123125783e-17,"y":0.4999999999999999}}*/
        />
        <Center>
          <Text style={styles.text2}>GET VOUCHER UP TO 50%</Text>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  carousel1: {
    width: 360,
    height: 160
  },
  rect1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text1: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF"
  },
  rect3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  image2: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  mask: {
    height: 160,
    width: 360,
    top: 0,
    left: 0,
    position: "absolute",
    opacity: 0.44
  },
  text2: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontFamily: "Roboto-Light",
    lineHeight: 28,
    letterSpacing: 2,
    fontSize: 28,
    height: 56,
    width: 332
  }
});
