import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Picker,
  TouchableNativeFeedback
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

export default class MainHouseKeeping extends Component {
  constructor(props) {
    super(props);
    this.state = { slectedItem: -1 };
  }

  getSelectedColor(elementName) {
    if (this.state.slectedItem == elementName) {
      return {
        borderColor: "#57a929",
        borderWidth: 1
      };
    } else {
      return {};
    }
  }

  makeSelected = element => {
    if (this.state.slectedItem == element) this.setState({ slectedItem: -1 });
    else this.setState({ slectedItem: element });
  };

  render() {
    buttonColor = this.state.slectedItem > -1 ? "#57a929" : null;
    buttonTextColor = this.state.slectedItem > -1 ? "#ffffff" : "grey";
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
              Housekeeping
            </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#f2f2f1" }}>
          <CardItem style={{ backgroundColor: "#f2f2f1", height: 40 }}>
            <Body>
              <Text>
                Good Afternoon,{" "}
                <Text style={{ fontWeight: "bold" }}>John Doe</Text>
              </Text>
            </Body>
            <Right style={{ justifyContent: "flex-start", marginTop: -5 }}>
              <Text style={{ fontWeight: "bold" }}>
                15 {"\u2103"}{" "}
                <Image
                  source={require("../../../assets/new/icon_weather.png")}
                />
              </Text>
            </Right>
          </CardItem>
          <CardItem style={{ backgroundColor: "#f2f2f1" }}>
            <Card>
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
          <CardItem style={{ backgroundColor: "#f2f2f1" }}>
            <View style={{ alignItems: "center" }}>
              <View style={{ width: winWidth * 0.9, marginTop: 10 }}>
                <Text style={{ textAlign: "left", color: "#54585a" }}>
                  Change Schedule
                </Text>
              </View>
              <View
                style={{ width: winWidth * 0.9, backgroundColor: "#ffffff" }}
              >
                <Picker mode="dropdown">
                  <Picker.Item label="Monday" value="java" />
                  <Picker.Item label="Tuesday" value="js" />
                  <Picker.Item label="Wednesday" value="js" />
                  <Picker.Item label="Thursday" value="js" />
                  <Picker.Item label="Friday" value="js" />
                  <Picker.Item label="Saturday" value="js" />
                  <Picker.Item label="Sunday" value="js" />
                </Picker>
              </View>

              <View style={{ width: winWidth * 0.9, marginTop: 10 }}>
                <Text style={{ textAlign: "left", color: "#54585a" }}>
                  Add a service
                </Text>
              </View>
              <View style={{ width: winWidth * 0.9 }}>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.makeSelected(0);
                  }}
                >
                  <Card
                    style={{
                      width: winWidth * 0.9,
                      backgroundColor: "#ffffff"
                    }}
                  >
                    <CardItem style={this.getSelectedColor(0)}>
                      <Grid>
                        <Col size={60}>
                          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            CLEAN PLUS
                          </Text>
                          <Text style={{ fontSize: 12 }}>
                            Daily Housekeeping
                          </Text>
                        </Col>
                        <Col size={40}>
                          <Text
                            style={{
                              color: "#458b1e",
                              fontSize: 18,
                              fontWeight: "bold"
                            }}
                          >
                            $ 98. 00
                          </Text>
                          <Text style={{ fontSize: 12 }}>
                            For your remaining stay
                          </Text>
                        </Col>
                      </Grid>
                    </CardItem>
                  </Card>
                </TouchableNativeFeedback>
              </View>

              <View style={{ width: winWidth * 0.9, marginTop: 10 }} />

              <View style={{ width: winWidth * 0.9 }}>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.makeSelected(1);
                  }}
                >
                  <Card>
                    <CardItem style={this.getSelectedColor(1)}>
                      <Grid>
                        <Col size={60}>
                          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            REFRESH
                          </Text>
                          <Text style={{ fontSize: 12 }}>Single Day</Text>
                        </Col>
                        <Col size={40}>
                          <Text
                            style={{
                              color: "#458b1e",
                              fontSize: 18,
                              fontWeight: "bold"
                            }}
                          >
                            $ 05. 00
                          </Text>
                          <Text style={{ fontSize: 12 }}>For tommorrow</Text>
                        </Col>
                      </Grid>
                    </CardItem>
                  </Card>
                </TouchableNativeFeedback>
                <Text style={{ fontSize: 13, marginTop: 10, marginBottom: 10 }}>
                  Fresh towels and linens are available at the front desk as
                  often as needed.
                </Text>
              </View>

              <View
                style={{
                  width: winWidth * 0.9,
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                <Button
                  block
                  disabled={buttonColor == "#57a929" ? false : true}
                  style={{ backgroundColor: buttonColor }}
                  onPress={() => {
                    Notification.create({
                      subject: "OYO-ROOMS ",
                      message: "Housekeeping is on its way !"
                    });
                  }}
                >
                  <Text style={{ color: buttonTextColor }}>
                    REQUEST SERVICE
                  </Text>
                </Button>
              </View>
            </View>
          </CardItem>
        </Content>
      </Container>
    );
  }
}
