import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableNativeFeedback,
  Dimensions,
  ImageBackground
} from "react-native";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Right
} from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import styles from "./list.card.component.style";
import { phonecall, web } from "react-native-communications";
import { NavigationActions } from "react-navigation";

var winWidth = Dimensions.get("window").width;
var winHeight = Dimensions.get("window").height;
export class HotelCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateItem: this.props.item
    };
  }

  handleCall = () => {
    phonecall("1800-123-123", true);
  };

  handleHotelInfo = () => {
    web(
      "http://google.com/search?q=" +
        this.state.stateItem.property +
        this.state.stateItem.Area
    );
  };

  handleHotelLocation = () => {
    web(
      "https://www.google.co.in/maps/search/" +
        this.state.stateItem.property +
        this.state.stateItem.Area +
        "/"
    );
  };

  render() {
    const { item } = this.props;

    return (
      <TouchableNativeFeedback style={{ marginLeft: 0, marginTop: 0 }}>
        <Card
          style={{
            marginRight: -20,
            marginTop: -18,
            marginBottom: -10,
            marginLeft: 0
          }}
        >
          <CardItem cardBody>
            <ImageBackground style={{ width: winWidth }} source={item.image}>
              <View style={{ height: 250 }}>
                <Grid>
                  <Row size={10}>
                    <Text
                      style={{
                        backgroundColor: "#fbc32a",
                        width: winWidth * 0.6,
                        paddingTop: 5,
                        paddingLeft: 3,
                        fontWeight: "600"
                      }}
                    >
                      Reservation # {item.reservationNumnber}
                    </Text>
                  </Row>
                  <Row
                    size={60}
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      marginBottom: 10,
                      marginLeft: 10
                    }}
                  >
                    <Text style={{ color: "#ffffff", fontSize: 28 }}>
                      {item.property}
                    </Text>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        fontSize: 20
                      }}
                    >
                      {item.Area}
                    </Text>
                  </Row>
                </Grid>
              </View>
            </ImageBackground>
          </CardItem>
          <CardItem style={{ backgroundColor: "#fbfbfa" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row"
              }}
            >
              <Grid style={{ marginTop: 10, marginBottom: 10 }}>
                <Col>
                  <Row size={25}>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      CHECK-IN
                    </Text>
                  </Row>
                  <Row
                    size={75}
                    style={{
                      justifyContent: "center"
                    }}
                  >
                    <Col size={45}>
                      <Text style={{ marginTop: -5, fontSize: 44 }}>
                        {item.checkinDate[0]}
                      </Text>
                    </Col>
                    <Col size={54} style={{ marginTop: 8 }}>
                      <Text>{item.checkinDate[1]}</Text>
                      <Text>{item.checkinDate[2]}</Text>
                    </Col>
                    <Col size={1} style={{ backgroundColor: "#b7b7b7" }} />
                  </Row>
                </Col>
                <Col
                  style={{
                    marginTop: 10,
                    alignItems: "center"
                  }}
                >
                  <Row>
                    <Image
                      resizeMode="contain"
                      style={{ width: 20, height: 20 }}
                      source={require("../../assets/new/icon_guests.png")}
                    />
                    <Text style={{ fontWeight: "bold" }}>{item.guests}</Text>
                    <Text style={{ fontWeight: "300" }}> GUESTS</Text>
                  </Row>
                  <Row>
                    <Image
                      resizeMode="contain"
                      style={{ width: 20, height: 20 }}
                      source={require("../../assets/new/icon_nights.png")}
                    />
                    <Text style={{ fontWeight: "bold" }}>{item.nights}</Text>
                    <Text style={{ fontWeight: "300" }}> NIGHTS</Text>
                  </Row>
                </Col>
                <Col>
                  <Row size={25} style={{ marginLeft: 5 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        marginLeft: 10
                      }}
                    >
                      CHECK-OUT
                    </Text>
                  </Row>
                  <Row
                    size={75}
                    style={{
                      justifyContent: "center",
                      marginLeft: 5
                    }}
                  >
                    <Col
                      size={1}
                      style={{ backgroundColor: "#b7b7b7", marginRight: 5 }}
                    />
                    <Col size={45}>
                      <Text style={{ marginTop: -5, fontSize: 44 }}>
                        {item.checkoutDays[0]}
                      </Text>
                    </Col>
                    <Col size={54} style={{ marginTop: 8 }}>
                      <Text>{item.checkoutDays[1]}</Text>
                      <Text>{item.checkoutDays[2]}</Text>
                    </Col>
                  </Row>
                </Col>
              </Grid>
            </View>
          </CardItem>
          <CardItem
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fbfbfa"
            }}
          >
            <View
              style={{
                width: winWidth * 0.8,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderTopColor: "#b7b7b7",
                borderTopWidth: 1
              }}
            >
              <Button
                transparent
                style={{
                  paddingRight: 10,
                  borderRightColor: "#b7b7b7",
                  borderRightWidth: 1,
                  marginTop: 5
                }}
                onPress={() => {
                  this.handleCall();
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/new/icon_phone.png")}
                />
                <Text style={{ paddingLeft: 5, paddingRight: 5 }}>Call</Text>
              </Button>

              <Button
                style={{
                  paddingRight: 10,
                  borderRightColor: "#b7b7b7",
                  borderRightWidth: 1,
                  marginTop: 5,
                  marginLeft: 10
                }}
                transparent
                onPress={() => {
                  this.handleHotelInfo();
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/new/icon_info.png")}
                />
                <Text style={{ paddingLeft: 5, paddingRight: 5 }}>
                  Hotel Info
                </Text>
              </Button>
              <Button
                style={{ marginLeft: 10, marginTop: 5 }}
                transparent
                onPress={() => {
                  this.handleHotelLocation();
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/new/icon_location_small.png")}
                />
                <Text style={{ paddingLeft: 5, paddingRight: 5 }}>
                  Location
                </Text>
              </Button>
            </View>
          </CardItem>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}
