import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Alert,
  TouchableNativeFeedback
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Icon,
  Footer,
  FooterTab,
  Button
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import styles from "./list.card.component.style";

var winWidth = Dimensions.get("window").width;
var winHeight = Dimensions.get("window").height;
import globalData from "./modalData";
import MapView from "react-native-maps";
import data from "./modalData";

export class TodayTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateItem: globalData.current[0]
    };
  }

  render() {
    var item = globalData.current[0];

    //Alert.alert(globalData.current.pop().checkinDate);

    return (
      <Container>
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
            <CardItem style={{ backgroundColor: "#f2f2f1", height: 60 }}>
              <Body>
                <Text>
                  Good Morning,{" "}
                  <Text style={{ fontWeight: "bold" }}>John Doe</Text>
                </Text>
              </Body>
              <Right style={{ justifyContent: "flex-start", marginTop: -15 }}>
                <Text style={{ fontWeight: "bold" }}>
                  15 {"\u2103"}{" "}
                  <Image
                    source={require("../../assets/new/icon_weather.png")}
                  />
                </Text>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <View>
                <Image
                  resizeMode="cover"
                  style={{
                    height: 200,
                    width: winWidth
                  }}
                  source={item.image}
                />
              </View>

              <View
                style={{
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: 200,
                  width: winWidth,
                  paddingLeft: 10,
                  paddingBottom: 10,
                  backgroundColor: "#0005"
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
              </View>
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
                title={item.property}
                description={item.Area}
              />
            </MapView>
          </View>
        </Content>
        <Card
          style={{
            left: winWidth * 0.05,
            position: "absolute",
            top: 40,
            bottom: 0,
            right: 0,
            height: 100,
            width: winWidth * 0.9
          }}
        >
          <CardItem>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.navigation.navigate("HotelCheckin");
              }}
            >
              <Grid>
                <Col size={15} style={{ justifyContent: "center" }}>
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={require("../../assets/new/icon_checked.png")}
                  />
                </Col>
                <Col size={60}>
                  <Text style={{ paddingRight: 5 }}>
                    Mobile check - is now available for your reservation at
                    Secaucus.
                  </Text>
                  <Text style={{ marginTop: 1, fontWeight: "bold" }}>
                    Check - In now
                  </Text>
                </Col>
                <Col
                  size={0.25}
                  style={{ backgroundColor: "#b7b7b7", height: 80 }}
                />

                <Col
                  size={24}
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    style={{ height: 40, width: 40, marginLeft: 5 }}
                    source={require("../../assets/new/icon_call.png")}
                  />
                </Col>
              </Grid>
            </TouchableNativeFeedback>
          </CardItem>
        </Card>
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
      </Container>
    );
  }
}
