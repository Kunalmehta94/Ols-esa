import React, { Component } from "react";
import { Text, Alert, View, Dimensions } from "react-native";
import { List, ListItem } from "native-base";
import { HotelCardComponent } from "./list.card.component";

var winWidth = Dimensions.get("window").width;
var winHeight = Dimensions.get("window").height;
export class ListingComponent extends Component {
  constructor(props) {
    super(props);
  }

  __renderItem(data) {
    return (
      <ListItem
        style={{
          borderBottomWidth: 0,
          width: winWidth,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 2
        }}
      >
        <HotelCardComponent item={data} navigation={this.props.navigation} />
      </ListItem>
    );
  }

  render() {
    const { data } = this.props;
    // Alert.alert("Props","data==" + data);
    return (
      <View>
        <List dataArray={data} renderRow={item => this.__renderItem(item)} />
      </View>
    );
  }
}
