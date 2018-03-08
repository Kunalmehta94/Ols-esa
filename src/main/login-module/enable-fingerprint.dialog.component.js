import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableNativeFeedback
} from "react-native";
import { Container, Content, Button, Picker, Item } from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default class EnableFingerPrintDialog extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ alignItems: "center" }}>
          <View style={{ width: width * 0.8 }}>
            <View style={{ alignItems: "center" }}>
              <Image
                resizeMode="contain"
                style={{
                  width: width * 0.3,
                  height: height * 0.3,
                  marginTop: 10
                }}
                source={require("../../assets/new/icon_fingerprint_Big.png")}
              />
              <Text
                style={{
                  fontSize: 30,
                  textAlign: "center",
                  color: "#74be4c",
                  fontWeight: "bold"
                }}
              >
                Keep your stay at fingertips
              </Text>

              <Text
                style={{
                  marginTop: 30,
                  fontSize: 18
                }}
              >
                Fingerprint makes it even easier and safer to see all your
                bookings and stays in one place.Its a good time to upgrade your
                security.
              </Text>
              <Button
                onPress={() => {
                  this.props.onEnable(true);
                  this.props.dialog();
                }}
                block
                style={{
                  backgroundColor: "#74be4c",
                  marginTop: 30,
                  height: 65
                }}
              >
                <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                  ENABLE NOW
                </Text>
              </Button>
              <TouchableNativeFeedback
                onPress={() => {
                  this.props.onEnable(false);
                  this.props.dialog();
                }}
              >
                <Text style={{ marginTop: 20, fontSize: 16 }}>
                  I'll do it later
                </Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
