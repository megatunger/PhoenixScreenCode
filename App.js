import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import HomeScreen from "./src/screens/HomeScreen";
import Trading from "./src/screens/Trading";

import Untitled from "./src/screens/Untitled";
import Account from "./src/screens/Account";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  Trading: {
    screen: Trading
  },
  Account: {
    screen: Account
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    HomeScreen: {
      screen: HomeScreen
    },
    Trading: {
      screen: Trading
    },
    Account: {
      screen: Account
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
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
      "Roboto-BoldItalic": require("./src/assets/fonts/Roboto-BoldItalic.ttf"),
      "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
      "Roboto-LightItalic": require("./src/assets/fonts/Roboto-LightItalic.ttf"),
      "Roboto-BlackItalic": require("./src/assets/fonts/Roboto-BlackItalic.ttf"),
      "Roboto-Italic": require("./src/assets/fonts/Roboto-Italic.ttf"),
      "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Thin": require("./src/assets/fonts/Roboto-Thin.ttf"),
      "Roboto-MediumItalic": require("./src/assets/fonts/Roboto-MediumItalic.ttf"),
      "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
      "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf")
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
