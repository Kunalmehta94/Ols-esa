import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  Picker
} from "react-native";
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
  Item,
  FooterTab,
  Footer
} from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import PopupDialog, { SlideAnimation } from "react-native-popup-dialog";
import CheckinDialogComponent from "./checkin-dialogs/checkin.dialog.component";
import MainServiceComponent from "../services-module/main.service.component";
import MapView from "react-native-maps";
import data from "../home-module/modalData";

const screenHeight = Dimensions.get("window").height;
var winWidth = Dimensions.get("window").width;
var winHeight = Dimensions.get("window").height;

const slideAnimation = new SlideAnimation({
  slideFrom: "bottom"
});

class HotelCheckinConfirmation extends Component {
  renderCheckinDialog = () => {
    this.popupDialog.show();
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
              Confirmation
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
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          style={{ width: 25, height: 25 }}
                          source={require("../../assets/new/icon_CheckedIn.png")}
                        />
                        <Text style={{ color: "#ffffff", marginLeft: 10 }}>
                          You are Checked in @
                        </Text>
                      </View>
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
                  <Col style={{ marginLeft: 20 }}>
                    <Row size={25}>
                      <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                        YOUR ROOM
                      </Text>
                    </Row>
                    <Row
                      size={75}
                      style={{
                        justifyContent: "center"
                      }}
                    >
                      <Col size={45}>
                        <Text style={{ marginTop: -5, fontSize: 44 }}>412</Text>
                      </Col>
                      <Col size={30} style={{ marginTop: 8, marginLeft: -20 }}>
                        <Image
                          style={{ height: 30, width: 30 }}
                          source={require("../../assets/new/icon_NoSmoking.png")}
                        />
                      </Col>
                      <Col
                        size={0.25}
                        style={{ backgroundColor: "#b7b7b7", marginRight: 20 }}
                      />
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
                        ARRIVAL-TIME
                      </Text>
                    </Row>
                    <Row
                      size={75}
                      style={{
                        justifyContent: "center",
                        marginLeft: 5
                      }}
                    >
                      <Col size={100}>
                        <Text style={{ marginTop: -5, fontSize: 44 }}>
                          4.00 P.M
                        </Text>
                      </Col>
                      <Col size={0} style={{ marginTop: 8 }} />
                    </Row>
                  </Col>
                </Grid>
              </View>
            </CardItem>
            <CardItem>
              <View
                style={{
                  width: winWidth * 0.8,
                  flexDirection: "row"
                }}
              >
                <Text style={{ fontSize: 12 }}>
                  Stop by the front desk for a minute to pickup your room key
                </Text>
              </View>
            </CardItem>
            <CardItem style={{ backgroundColor: "#eeedeb" }}>
              <View
                style={{
                  width: winWidth * 0.8,
                  flexDirection: "row"
                }}
              >
                <Text style={{ fontSize: 12 }}>
                  Check out 12.00 PM on Thursday, 18 Jan
                </Text>
              </View>
            </CardItem>
          </Card>
          <View style={{ marginTop: -4 }}>
            <MapView
              style={{ width: winWidth, height: 300 }}
              initialRegion={{
                latitude: 40.783381,
                longitude: -74.044687,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <MapView.Marker
                coordinate={{ latitude: 40.783381, longitude: -74.044687 }}
                title={"OYO-ROOMS"}
                description={"Bhiwani"}
              />
            </MapView>
          </View>
        </Content>
        <Footer>
          <FooterTab
            style={{
              backgroundColor: "#54585a"
            }}
          >
            <Button
              onPress={() => {
                this.props.navigation.navigate("MainService");
              }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
                source={require("../../assets/new/icon_area.png")}
              />
              <Text style={{ color: "#ffffff", fontSize: 10 }}>
                IN THE AREA
              </Text>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate("MainService");
              }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
                source={require("../../assets/new/icon_thehotel.png")}
              />
              <Text style={{ color: "#ffffff", fontSize: 10 }}>THE HOTEL</Text>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate("MainService");
              }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
                source={require("../../assets/new/icon_ride.png")}
              />
              <Text style={{ marginTop: 0, color: "#ffffff", fontSize: 10 }}>
                REQUEST RIDE
              </Text>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate("MainService");
              }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
                source={require("../../assets/new/icon_room_service.png")}
              />
              <Text style={{ color: "#ffffff", fontSize: 10 }}>
                ASK A SERVICE
              </Text>
            </Button>
          </FooterTab>
        </Footer>
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

export default HotelCheckinConfirmation;
