import React, { Component } from "react";
import { View, Text } from "react-native";

export default class GalleryScreen extends Component {
  handleClick = () => {};

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Demo App Gallery</Text>
      </View>
    );
  }
}
