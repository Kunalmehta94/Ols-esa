import React, { Component } from "react";
import { View, Image } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Footer,
  Text,
  Button,
  Icon
} from "native-base";

export default class SplashScreenComponent extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })]
        })
      );
    }, 3000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#473728"
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 300, height: 100 }}
          source={require("../../assets/new/ESA_LOGO.png")}
        />
      </View>
    );
  }
}
