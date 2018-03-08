import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Container, Content, Button, Picker, Item} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import styles from './checkin.dialog.component.style';


class CheckinDialogComponent extends Component {
  handleCheckin = () => {
    Notification.create ({
      subject: 'OYO-ROOMS,INDIA',
      message: 'Your check in for OYO - Bangalore is succesful. Have a comfort stay !',
    });
  };

  render () {
    return (
      <Content>
        <Grid>
          <Col style={[styles.master]}>
            <Row>
              <Text style={styles.descTitles}>Dec 19-21</Text>
            </Row>
            <Row>
              <Text style={styles.descCont}>
                OYO ROOMS-INDIA
              </Text>
            </Row>
            <Row style={[styles.generalSpace40]}>
              <Text style={styles.descMainTitle}>Ready to checkin ?</Text>
            </Row>
            <Row style={[styles.generalSpace40]}>
              <Col>
                <Row>
                  <Text style={styles.descTitles}>Reservation Number</Text>
                </Row>
                <Row><Text style={styles.descCont}>ESA4587895</Text></Row>
              </Col>
              <Col>
                <Row><Text style={styles.descTitles}>NIGHTS</Text></Row>
                <Row><Text style={styles.descCont}>2</Text></Row>
              </Col>

            </Row>
            <Row style={[styles.generalSpace20]}>
              <View
                style={{
                  height: 0.5,
                  flex: 1,
                  backgroundColor: '#d3d3d3',
                  borderColor: '#d3d3d3',
                  borderWidth: 1,
                }}
              />
            </Row>

            <Row style={[styles.generalSpace20]}>
              <Text style={styles.descTitles}>Reservation details</Text>
            </Row>
            <Row>
              <Text style={styles.descCont}>1 Room, 2 Guest</Text>
            </Row>

            <Row style={[styles.generalSpace20]}>
              <View
                style={{
                  height: 0.5,
                  flex: 1,
                  backgroundColor: '#d3d3d3',
                  borderColor: '#d3d3d3',
                  borderWidth: 1,
                }}
              />
            </Row>

            <Row style={[styles.generalSpace20]}>
              <Text style={styles.descTitles}>Room Type</Text>
            </Row>
            <Row>
              <Text style={styles.descCont}>Suite, 2 Queen, Sofa bed</Text>
            </Row>

            <Row style={[styles.generalSpace20]}>
              <View
                style={{
                  height: 0.5,
                  flex: 1,
                  backgroundColor: '#d3d3d3',
                  borderColor: '#d3d3d3',
                  borderWidth: 1,
                }}
              />
            </Row>

            <Row style={[styles.generalSpace20]}>
              <Col>
                <Text style={[styles.descCont, styles.generalSpace10]}>
                  Arrival time
                </Text>
              </Col>
              <Col>
                <Picker mode="dropdown" note={true} itemStyle={styles.descCont}>
                  <Item label="4.00 P.M" value="key0" />
                  <Item label="4.30 P.M" value="key1" />
                  <Item label="5.00 P.M" value="key2" />
                  <Item label="5.30 P.M" value="key3" />
                  <Item label="6.00 P.M" value="key4" />
                </Picker>

              </Col>

            </Row>

            <Row style={[styles.generalSpace20]}>

              <Text style={styles.descTitles}>
                We will need atleast an hour to get ready for your arrival. Availability can't be guaranteed before 4.00 PM hotel time.
              </Text>
            </Row>

            <Row style={[styles.generalSpace40]}>
              <Button
                block
                primary
                style={[styles.button]}
                onPress={() => {
                  this.handleCheckin ();
                }}
              >
                <Text style={[styles.buttonText]}>Confirm Check In</Text>
              </Button>
            </Row>

          </Col>
        </Grid>

      </Content>
    );
  }
}

export default CheckinDialogComponent;
