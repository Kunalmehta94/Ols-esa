import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback, Alert} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Item,
  Thumbnail,
  Separator,
} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';

class FoodAndBeverageComponent extends Component {
  render () {
    return (
      <View>
        <Grid>
          <Col>
            <Row
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                margin: 20,
              }}
            >
              <View>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.serviceCallback ('Breakfast');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://www.myiconfinder.com/uploads/iconsets/bdb6f1f690f53ec70da10b4eae374f88.png',
                    }}
                  />
                </TouchableNativeFeedback>

                <Text style={{textAlign: 'center'}}>Breakfast</Text>
              </View>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                margin: 20,
              }}
            >
              <View>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.serviceCallback ('Coffee');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://www.freepngimg.com/download/coffee/9-2-coffee-transparent.png',
                    }}
                  />
                </TouchableNativeFeedback>

                <Text style={{textAlign: 'center'}}>Coffee</Text>
              </View>
            </Row>
          </Col>
          <Col>
            <Row
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                margin: 20,
              }}
            >
              <View>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.serviceCallback ('Lunch');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png',
                    }}
                  />
                </TouchableNativeFeedback>

                <Text style={{textAlign: 'center'}}>Lunch</Text>

              </View>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                margin: 20,
              }}
            >
              <View>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.serviceCallback ('Beverages');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://stirpack.com/assets/graphx/beverage_industry_icon.png',
                    }}
                  />
                </TouchableNativeFeedback>

                <Text style={{textAlign: 'center'}}>Beverages</Text>
              </View>
            </Row>
          </Col>
          <Col>
            <Row
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                margin: 20,
              }}
            >
              <View>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.serviceCallback ('Dinner');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'https://image.flaticon.com/icons/png/512/290/290005.png',
                    }}
                  />
                </TouchableNativeFeedback>

                <Text style={{textAlign: 'center'}}>Dinner</Text>

              </View>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                margin: 20,
              }}
            >
              <View>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.serviceCallback ('Tea');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-grunge-clipart-icons-food-beverage/057240-green-grunge-clipart-icon-food-beverage-coffee-tea.png',
                    }}
                  />
                </TouchableNativeFeedback>

                <Text style={{textAlign: 'center'}}>Tea</Text>
              </View>
            </Row>

          </Col>

        </Grid>

      </View>
    );
  }
}

export default FoodAndBeverageComponent;
