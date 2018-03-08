import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import EnableFingerPrintDialog from "./enable-fingerprint.dialog.component";
import {
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  Alert,
  PlatformOSType,
  TouchableNativeFeedback
} from "react-native";
import {
  Container,
  Header,
  Left,
  Item,
  Input,
  Label,
  ListItem,
  CheckBox,
  Body,
  Right,
  Content,
  Footer,
  Text,
  Button,
  Icon
} from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import FingerprintScanner from "react-native-fingerprint-scanner";
import PopupDialog, { SlideAnimation } from "react-native-popup-dialog";

const slideAnimation = new SlideAnimation({
  slideFrom: "bottom"
});

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
var androidInput = { onAttempt: this.handleAuthenticationAttempted };
var iosInput = {
  description: "Scan your fingerprint on the device scanner to continue"
};

export default class LoginScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      popupShowed: false,
      fingerprintEnabled: false
    };
  }

  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true });
  };

  handleFingerprintDismissed = () => {
    this.setState({ popupShowed: false });
  };

  componentDidMount() {
    this.authenticate();
  }

  authenticate = () => {
    var input = undefined;
    if (PlatformOSType === "ios") {
      input = iosInput;
    } else {
      input = androidInput;
    }
    FingerprintScanner.isSensorAvailable()
      .then(() => {
        FingerprintScanner.authenticate(input)
          .then(() => {
            Alert.alert(
              "Fingerprint Authentication",
              "Authenticated successfully"
            );
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Home" })]
              })
            );
          })
          .catch(error => {
            Alert.alert("Fingerprint Authentication", error.message);
          });
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  handleAuthenticationAttempted = error => {
    Alert.alert("Fingerprint Authentication", error.message);
  };

  componentWillUnmount() {
    FingerprintScanner.release();
  }

  handleFingerEnabling = isEnabled => {
    this.setState({ fingerprintEnabled: isEnabled });
  };

  render() {
    const { errorMessage, popupShowed } = this.state;
    var sizeArray = [];
    if (this.state.fingerprintEnabled) {
      sizeArray = [15, 30, 50];
    } else {
      sizeArray = [25, 20, 55];
    }

    return (
      <Container>
        <Grid>
          <Col>
            <Row
              size={sizeArray[0]}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#473728"
              }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 280, height: 100 }}
                source={require("./../../assets/new/ESA_LOGO.png")}
              />
            </Row>
            {this.state.fingerprintEnabled ? (
              <Row
                size={sizeArray[1]}
                style={{
                  backgroundColor: "#f3f3f3",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "#57a929",
                    fontSize: 25,
                    marginTop: 20,
                    fontWeight: "400"
                  }}
                >
                  Login with Touch ID
                </Text>
                <View style={{ elevation: 10, marginTop: 20 }}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      this.authenticate();
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      style={{
                        width: width * 0.22,
                        height: height * 0.12
                      }}
                      source={require("../../assets/new/btn_fingerprint.png")}
                    />
                  </TouchableNativeFeedback>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 10,
                    color: "#333333",
                    fontWeight: "100"
                  }}
                >
                  Please place your finger to login
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    width: width,
                    marginTop: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      height: 2,
                      width: width * 0.23,
                      backgroundColor: "#d7d7d7"
                    }}
                  />
                  <Text style={{ marginLeft: 10, marginRight: 10 }}>or</Text>
                  <View
                    style={{
                      height: 2,
                      width: width * 0.2,
                      backgroundColor: "#d7d7d7"
                    }}
                  />
                </View>
              </Row>
            ) : (
              <Row size={sizeArray[1]} style={{ backgroundColor: "#000f" }}>
                <Image
                  resizeMode="contain"
                  source={require("./../../assets/new/img_loginpage.jpg")}
                />
                <View
                  style={{
                    position: "absolute",

                    width: width,
                    top: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <View>
                    <Text style={{ color: "#ffffff", fontSize: 28 }}>
                      create a better
                    </Text>
                    <Text
                      style={{
                        color: "#57a929",
                        fontSize: 28,
                        fontWeight: "bold"
                      }}
                    >
                      STAY
                    </Text>
                  </View>
                </View>
              </Row>
            )}
            <Row
              size={sizeArray[2]}
              style={{ backgroundColor: "#f3f3f3", justifyContent: "center" }}
            >
              <View style={{ width: width * 0.75 }}>
                <Item style={{ marginTop: height * 0.05 }}>
                  <Input placeholder="User Id or Member Id" />
                </Item>
                <Item style={{ marginTop: height * 0.05 }}>
                  <Input placeholder="Password" />
                  <TouchableNativeFeedback
                    onPress={() => {
                      this.popupDialog.show();
                    }}
                  >
                    <Image
                      style={{ width: 40, height: 40 }}
                      source={require("./../../assets/new/icon_fingerprint.png")}
                    />
                  </TouchableNativeFeedback>
                </Item>

                <Button
                  style={{
                    marginTop: height * 0.05,
                    height: 65,
                    backgroundColor: "#57a929"
                  }}
                  onPress={() => {
                    this.props.navigation.dispatch(
                      NavigationActions.reset({
                        index: 0,
                        actions: [
                          NavigationActions.navigate({ routeName: "Home" })
                        ]
                      })
                    );
                  }}
                  block
                  light
                >
                  <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                    LOG IN
                  </Text>
                </Button>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={{ marginLeft: 20 }}>Register</Text>
                  <Text style={{ marginLeft: 20 }}>|</Text>
                  <Text style={{ marginLeft: 20 }}>Login Help</Text>
                </View>
              </View>
            </Row>
          </Col>
        </Grid>
        <PopupDialog
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
          height={0.9}
          width={0.97}
        >
          <EnableFingerPrintDialog
            onEnable={this.handleFingerEnabling}
            dialog={() => this.popupDialog.dismiss()}
          />
        </PopupDialog>
      </Container>
    );
  }
}
