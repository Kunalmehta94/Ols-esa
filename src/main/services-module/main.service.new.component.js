import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableNativeFeedback,
  ScrollView
} from "react-native";
import {
  Container,
  Content,
  Header,
  Tabs,
  Tab,
  Icon,
  Body,
  Left,
  Right,
  Button,
  Title,
  CardItem,
  Card,
  Footer,
  FooterTab
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

var winWidth = Dimensions.get("window").width;
var winHeight = Dimensions.get("window").height;

export default class MainServiceNewScreen extends Component {
  render() {
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
              Request a Service
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
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0
            }}
          >
            <CardItem
              style={{ backgroundColor: "#f2f2f1", height: 60, paddingTop: 15 }}
            >
              <Body>
                <Text>
                  Good Afternoon,{" "}
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
            <CardItem style={{ backgroundColor: "#f2f2f1", marginTop: -25 }}>
              <Card style={{ marginBottom: 10 }}>
                <Grid
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                >
                  <Row>
                    <Col>
                      <Text style={{ fontSize: 12 }}>YOUR STAY</Text>
                      <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                        ROOM 412
                      </Text>
                    </Col>
                    <Col>
                      <Text style={{ fontSize: 12 }}>CHECK OUT</Text>
                      <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                        12 PM on Thu, 18 JAN
                      </Text>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 5 }}>
                    <Col
                      size={10}
                      style={{ height: 5, backgroundColor: "#74be4b" }}
                    />
                    <Col
                      size={90}
                      style={{ height: 5, backgroundColor: "#dddede" }}
                    />
                  </Row>
                  <Row style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      DAY 1
                    </Text>
                  </Row>
                </Grid>
              </Card>
            </CardItem>
            <CardItem cardBody>
              <Grid>
                <Col>
                  <TouchableNativeFeedback
                    onPress={() => {
                      this.props.navigation.navigate("MainHouseKeeping");
                    }}
                  >
                    <Row
                      style={{
                        backgroundColor: "#0005",
                        height: 200,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Image
                        resizeMode="cover"
                        style={{ height: 200 }}
                        source={require("../../assets/new/img_housekeeping.png")}
                      />
                      <View
                        style={{
                          position: "absolute",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          style={{ width: 60, height: 60 }}
                          source={require("../../assets/new/icon_housekeeping.png")}
                        />
                        <Text
                          style={{
                            color: "#ffffff",
                            marginTop: 5,
                            textAlign: "center"
                          }}
                        >
                          House Keeping
                        </Text>
                      </View>
                    </Row>
                  </TouchableNativeFeedback>

                  <Row
                    style={{
                      backgroundColor: "#0005",
                      height: 200,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      resizeMode="cover"
                      style={{ height: 200 }}
                      source={require("../../assets/new/img_Amenities.png")}
                    />

                    <View
                      style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        style={{ width: 60, height: 60 }}
                        source={require("../../assets/new/icon_amenities.png")}
                      />
                      <Text
                        style={{
                          color: "#ffffff",
                          marginTop: 5,
                          textAlign: "center"
                        }}
                      >
                        Aminities
                      </Text>
                    </View>
                  </Row>
                </Col>
                <Col>
                  <Row
                    style={{
                      backgroundColor: "#0005",
                      height: 200,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      resizeMode="cover"
                      style={{ height: 200 }}
                      source={require("../../assets/new/img_telephone.png")}
                    />

                    <View
                      style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        style={{ width: 60, height: 60 }}
                        source={require("../../assets/new/icon_Telephone.png")}
                      />
                      <Text
                        style={{
                          color: "#ffffff",
                          marginTop: 5,
                          textAlign: "center"
                        }}
                      >
                        Telephone
                      </Text>
                    </View>
                  </Row>
                  <Row
                    style={{
                      backgroundColor: "#0005",
                      height: 200,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      resizeMode="cover"
                      style={{ height: 200 }}
                      source={require("../../assets/new/img_ConnectWiFi.png")}
                    />

                    <View
                      style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        style={{ width: 40, height: 60 }}
                        source={require("../../assets/new/icon_Wifi.png")}
                      />
                      <Text
                        style={{
                          color: "#ffffff",
                          marginTop: 5,
                          textAlign: "center"
                        }}
                      >
                        Wifi Connectivity
                      </Text>
                    </View>
                  </Row>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </Content>
        <Footer style={{ height: 70 }}>
          <FooterTab style={{ backgroundColor: "#54585a" }}>
            <ScrollView horizontal={true}>
              <Grid>
                <Col style={{ backgroundColor: "#ffffff" }}>
                  <Text style={{ fontSize: 12, padding: 5 }}>
                    Need suggestions {"\n"}for lunch?
                  </Text>
                </Col>
                <Col>
                  <Image
                    resizeMode="stretch"
                    style={{ height: 70 }}
                    source={require("../../assets/new/img_add1.png")}
                  />
                </Col>
                <Col>
                  <Image
                    resizeMode="stretch"
                    style={{ height: 70 }}
                    source={require("../../assets/new/img_add2.png")}
                  />
                </Col>
                <Col>
                  <Image
                    resizeMode="stretch"
                    style={{ height: 70 }}
                    source={require("../../assets/new/img_add3.png")}
                  />
                </Col>
              </Grid>
            </ScrollView>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
