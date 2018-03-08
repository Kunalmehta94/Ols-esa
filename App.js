/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import SplashScreenComponent from "./src/main/splash-module/splash";
import LoginScreenComponent from "./src/main/login-module/login";
import HomeScreenComponent from "./src/main/home-module/home.component";
import HotelCheckinHomeScreenComponent from "./src/main/checkin-module/hotel.checkin.home.component";
import MainServiceComponent from "./src/main/services-module/main.service.component";
import HotelCheckinConfirmation from "./src/main/checkin-module/hotel.checkin.confirmation.component";
import MainServiceNewScreen from "./src/main/services-module/main.service.new.component";
import MainHouseKeeping from "./src/main/services-module/service-categories/house.keeping.new.component";
const App = StackNavigator({
  Splash: {
    screen: SplashScreenComponent,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreenComponent,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: HomeScreenComponent,
    navigationOptions: {
      header: null
    }
  },
  HotelCheckin: {
    screen: HotelCheckinHomeScreenComponent,
    navigationOptions: {
      header: null
    }
  },
  HotelCheckinConfirmation: {
    screen: HotelCheckinConfirmation,
    navigationOptions: {
      header: null
    }
  },
  MainService: {
    screen: MainServiceNewScreen,
    navigationOptions: {
      header: null
    }
  },
  MainHouseKeeping: {
    screen: MainHouseKeeping,
    navigationOptions: {
      header: null
    }
  }
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
