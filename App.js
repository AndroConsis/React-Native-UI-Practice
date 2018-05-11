/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <View style={styles.containerLeft}>
          <View style={styles.leftButtonContainer}>
            <Text style={styles.textButton}>LOG IN</Text>
            <Text style={styles.textButton}>SIGN UP</Text>
          </View>
          <View style={styles.swiperDots} />
        </View>
        <View style={styles.containerRight}>
          <View
            style={{
              flex: 3,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingVertical: 60,
              paddingHorizontal: 30
            }}
          >
            <Text style={{ color: "white", fontSize: 20, textAlign: "left" }}>
              Welcome back!
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              Log in to continue
            </Text>
          </View>
          <View style={{ flex: 7 }}>
            <View style={styles.formStyle}>
              <TextInput
                placeholder={"email"}
                keyboardType={"email-address"}
                autoCapitalize={"none"}
                style={[styles.input, styles.borderBottom]}
                placeholderTextColor={"#4f4f4f"}
              />
              <TextInput
                style={styles.input}
                placeholder={"password"}
                secureTextEntry
                placeholderTextColor={"#4f4f4f"}
              />
            </View>
            <TouchableOpacity style={{ padding: 25}}>
              <Text style={{color: "white", fontSize: 12}}>CONTINUE →</Text>  
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
    zIndex: 0
  },
  containerLeft: {
    flex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 0
  },
  containerRight: {
    flex: 8,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 1
  },
  swiperDots: {
    flex: 5,
    zIndex: 1
  },
  leftButtonContainer: {
    flex: 5,
    marginTop: 80,
    marginBottom: 120,
    justifyContent: "space-around",
    alignItems: "center"
  },
  textButton: {
    color: "white",
    transform: [{ rotate: "-90deg" }]
  },
  formStyle: {
    backgroundColor: "#333846",
    shadowOpacity: 0.7,
    shadowRadius: 15,
    shadowColor: 'black',
    shadowOffset: { height: 10, width: -10 },
  },
  input: {
    color: "white",
    fontSize: 15,
    paddingVertical: 30,
    paddingHorizontal: 40 
  },
  borderBottom: {
    borderBottomColor: "#4f4f4f",
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
