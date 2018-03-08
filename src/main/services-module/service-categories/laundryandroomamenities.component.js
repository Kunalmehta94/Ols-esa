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

class LaundryAndRomAmenitiesComponent extends Component {
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
                    this.props.serviceCallback ('+1 Bed');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://lafayettehotel.ru/uploads/media/service/0001/01/ddc25356520c07ce7223cc3ae87e12cc57033945.png',
                    }}
                  />
                </TouchableNativeFeedback>
                <Text style={{textAlign: 'center'}}>+1 Bed</Text>
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
                    this.props.serviceCallback ('Laundry Service');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://www.pvhc.net/img172/plfrbmjbpmrhmvxvreey.png',
                    }}
                  />
                </TouchableNativeFeedback>
                <Text style={{textAlign: 'center'}}>Laundry Service</Text>

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
                    this.props.serviceCallback ('Dental Kit');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'https://cdn3.iconfinder.com/data/icons/dental-blue-icons/512/Untitled-1.png',
                    }}
                  />
                </TouchableNativeFeedback>
                <Text style={{textAlign: 'center'}}>Dental Kit</Text>

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
                    this.props.serviceCallback ('Bathroom kit');
                  }}
                >
                  <Thumbnail
                    circular
                    size={20}
                    source={{
                      uri: 'http://www.free-icons-download.net/images/bathroom-sign-icon-65947.png',
                    }}
                  />
                </TouchableNativeFeedback>
                <Text style={{textAlign: 'center'}}>Bathroom kit</Text>

              </View>
            </Row>

          </Col>

        </Grid>

      </View>
    );
  }
}

export default LaundryAndRomAmenitiesComponent;
