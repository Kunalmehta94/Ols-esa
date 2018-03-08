import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  Picker,
  Alert
} from "react-native";
import { phonecall, web } from "react-native-communications";
import styles from "./hotel.checkin.home.component.style";

import {
  Card,
  CardItem,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Container,
  Content,
  Header,
  Title,
  Form,
  Item
} from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import PopupDialog, { SlideAnimation } from "react-native-popup-dialog";
import CheckinDialogComponent from "./checkin-dialogs/checkin.dialog.component";
import MainServiceComponent from "../services-module/main.service.component";
import data from "../home-module/modalData";

const screenHeight = Dimensions.get("window").height;
var winWidth = Dimensions.get("window").width;
var winHeight = Dimensions.get("window").height;

const slideAnimation = new SlideAnimation({
  slideFrom: "bottom"
});

class HotelCheckinHomeScreenComponent extends Component {
  renderCheckinDialog = () => {
    this.popupDialog.show();
  };
  handleCall = () => {
    phonecall("1800-123-123", true);
  };

  handleHotelInfo = () => {
    web(
      "http://google.com/search?q=" +
        data.current[0].property +
        data.current[0].Area
    );
  };

  handleHotelLocation = () => {
    web(
      "https://www.google.co.in/maps/search/" +
        data.current[0].property +
        data.current[0].Area +
        "/"
    );
  };
  render() {
    var item = data.current[0];
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#473728" }}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack(null);
              }}
            >
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ marginLeft: -30, marginRight: -30 }}>
              Check - In
            </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card
            style={{
              paddingLeft: 0,
              marginLeft: 0,
              paddingRight: 0,
              marginRight: 0,
              marginTop: 0
            }}
          >
            <CardItem cardBody>
              <ImageBackground
                style={{ width: winWidth }}
                source={require("../../assets/new/img_Hotel2.jpg")}
              >
                <View style={{ height: 200 }}>
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
                      <Text
                        style={{
                          color: "#ffffff",
                          fontWeight: "100",
                          fontSize: 18
                        }}
                      >
                        {item.address}
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
          <View style={{ alignItems: "center" }}>
            <View style={{ width: winWidth * 0.9, marginTop: 10 }}>
              <Text style={{ textAlign: "left", color: "#54585a" }}>
                Reservation Details
              </Text>
            </View>
            <View style={{ width: winWidth * 0.9, backgroundColor: "#ffffff" }}>
              <Picker mode="dropdown">
                <Picker.Item label="1 Room 15 Nights" value="java" />
                <Picker.Item label="1 Room 14 Nights" value="js" />
              </Picker>
            </View>

            <View style={{ width: winWidth * 0.9, marginTop: 10 }}>
              <Text style={{ textAlign: "left", color: "#54585a" }}>
                Room Type
              </Text>
            </View>
            <View style={{ width: winWidth * 0.9, backgroundColor: "#ffffff" }}>
              <Picker mode="dropdown">
                <Picker.Item label="Studio Suite, 1 Queen Bed" value="java" />
                <Picker.Item label="Studio Suite, 2 Queen Bed" value="js" />
              </Picker>
            </View>

            <View style={{ width: winWidth * 0.9, marginTop: 10 }}>
              <Text style={{ textAlign: "left", color: "#54585a" }}>
                Arrival Time
              </Text>
            </View>
            <View style={{ width: winWidth * 0.9, backgroundColor: "#ffffff" }}>
              <Picker mode="dropdown">
                <Picker.Item label="4.00 P.M" value="java" />
                <Picker.Item label="5.00 P.M" value="js" />
                <Picker.Item label="6.00 P.M" value="js" />
                <Picker.Item label="7.00 P.M" value="js" />
              </Picker>
            </View>
            <View
              style={{ width: winWidth * 0.9, marginTop: 10, marginBottom: 10 }}
            >
              <Button
                block
                style={{ backgroundColor: "#57a929" }}
                // onPres={() => {
                //   Alert.alert("Working");
                //   this.props.navigation.navigate("HotelCheckinConfirmation");
                // }}
                onPress={() => {
                  Notification.create({
                    subject: "OYO-ROOMS",
                    message: " Your Check-in confirmed. Happy stay !!"
                  });
                  this.props.navigation.navigate("HotelCheckinConfirmation");
                }}
              >
                <Text style={{ color: "#ffffff" }}>CONFIRM CHECK IN</Text>
              </Button>
            </View>
          </View>
        </Content>
        <PopupDialog
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
          height={0.9}
          width={0.97}
        >
          <CheckinDialogComponent />
        </PopupDialog>
        <PopupDialog
          ref={popupDialog => {
            this.serviceDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
          height={0.9}
          width={0.97}
        >
          <MainServiceComponent />
        </PopupDialog>
      </Container>
    );
  }
}

export default HotelCheckinHomeScreenComponent;
