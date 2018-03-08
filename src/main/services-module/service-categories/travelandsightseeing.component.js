import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
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

class TravelAndSightSeeingComponent extends Component {
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
                    this.props.serviceCallback ('Local Tour');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://www.pvhc.net/img185/ebgkehfqsfjqqatdgjvv.png',
                    }}
                  />
                </TouchableNativeFeedback>
                <Text style={{textAlign: 'center'}}>Local Tour</Text>
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
                    this.props.serviceCallback ('Bike Hire');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://www.boavistarent.com/wp-content/uploads/2016/05/boavistarent-icon-dirt-bike-180x180.png',
                    }}
                  />
                </TouchableNativeFeedback>
                <Text style={{textAlign: 'center'}}>Bike Hire</Text>

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
                    this.props.serviceCallback ('Car Hire');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'https://flycruisestay.com/wp-content/uploads/2017/04/icon_car.png',
                    }}
                  />
                </TouchableNativeFeedback>
                <Text style={{textAlign: 'center'}}>Car Hire</Text>

              </View>
            </Row>

          </Col>

        </Grid>

      </View>
    );
  }
}

export default TravelAndSightSeeingComponent;
