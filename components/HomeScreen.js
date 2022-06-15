import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Monitor from "../src/icons/Monitor";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Demo App</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Gallery")}>
          <Monitor />
        </TouchableOpacity>
      </View>
    );
  }
}
