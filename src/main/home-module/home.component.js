import React, { Component } from "react";
import { Text } from "react-native";
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
  Title
} from "native-base";
import { ListingComponent } from "./current.component";
import { TodayTabComponent } from "./today.component";
import globalData from "./modalData";

export default class HomeScreenComponent extends Component {
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
              My Reservations
            </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab
            heading="TODAY"
            textStyle={{ color: "#ffffff" }}
            tabStyle={{ backgroundColor: "#74be4b" }}
            activeTabStyle={{ backgroundColor: "#83ce5a" }}
          >
            <TodayTabComponent navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="UPCOMING"
            textStyle={{ color: "#ffffff" }}
            tabStyle={{ backgroundColor: "#74be4b" }}
            activeTabStyle={{ backgroundColor: "#83ce5a" }}
          >
            <ListingComponent
              data={globalData.upcoming}
              navigation={this.props.navigation}
            />
          </Tab>
          <Tab
            heading="CANCELLED"
            textStyle={{ color: "#ffffff" }}
            tabStyle={{ backgroundColor: "#74be4b" }}
            activeTabStyle={{ backgroundColor: "#83ce5a" }}
          >
            <ListingComponent
              data={globalData.cancelled}
              navigation={this.props.navigation}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
