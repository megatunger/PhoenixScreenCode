import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Offers from "./src/screens/Offers";

import Android from "./src/screens/Android";

import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Offers: {
    screen: Offers
  },
  Android: {
    screen: Android
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Offers: {
      screen: Offers
    },
    Android: {
      screen: Android
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
