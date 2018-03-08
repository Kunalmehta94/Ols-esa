import React, {Component} from 'react';
import {View, Text, Alert, TouchableNativeFeedback} from 'react-native';
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

import {Grid, Col} from 'react-native-easy-grid';
import Accordion from 'react-native-collapsible/Accordion';
import FoodAndBeverageComponent
  from './service-categories/foodandbeverage.component';
import LaundryAndRomAmenitiesComponent
  from './service-categories/laundryandroomamenities.component';
import TravelAndSightSeeingComponent
  from './service-categories/travelandsightseeing.component';

const sections = [
  {
    header: 'Food & Bevereges',
    headerImage: 'http://www.pvhc.net/img47/nsihbgslwdkqleykniyu.png',
    headerdesc: 'Services related to the food and beverages at room',
    Content: FoodAndBeverageComponent,
  },
  {
    header: 'Travel & Tour',
    headerImage: 'https://marketplace.canva.com/MACAoKVEcBE/1/thumbnail_large/canva--travel-MACAoKVEcBE.png',
    headerdesc: 'We help in exploring the city ',
    Content: TravelAndSightSeeingComponent,
  },
  {
    header: 'Laundry & Room Amenities',
    headerImage: 'http://sussexlaundry.com/wp-content/uploads/2015/12/PersonalLaundryService.png',
    headerdesc: 'Laundry and room needs at your door step',
    Content: LaundryAndRomAmenitiesComponent,
  },
];
class MainServiceComponent extends Component {
  constructor (props) {
    super (props);
  }
  __handleService = serviceName => {
    Notification.create ({
      subject: 'OYO ROOMS - INDIA',
      message: serviceName + ' is on its way !',
    });
  };

  __renderHead (section, i, isActive) {
    return (
      <View style={{height: 100}}>
        <Grid>
          <Col
            size={0.25}
            style={{alignItems: 'center', justifyContent: 'center'}}
          >
            <Thumbnail
              circular
              size={50}
              source={{
                uri: section.headerImage,
              }}
            />
          </Col>
          <Col size={0.75} style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              {section.header}
            </Text>
            <Text note>{section.headerdesc}</Text>
          </Col>
        </Grid>
      </View>
    );
  }

  __renderContent (section, i, isActive) {
    var Element = section.Content;
    return (
      <View>
        <Element serviceCallback={this.__handleService} />

      </View>
    );
  }
  render () {
    return (
      <Container>
        <Content>
          <Text
            style={{
              fontSize: 25,

              marginTop: 30,

              marginBottom: 30,
              marginLeft: 20,
            }}
          >
            Available Services..
          </Text>
          <Accordion
            sections={sections}
            renderHeader={(section, i, isActive) => {
              return this.__renderHead (section, i, isActive);
            }}
            renderContent={(section, i, isActive) => {
              return this.__renderContent (section, i, isActive);
            }}
            duration={150}
            touchableComponent={TouchableNativeFeedback}
          />
        </Content>
      </Container>
    );
  }
}

export default MainServiceComponent;
