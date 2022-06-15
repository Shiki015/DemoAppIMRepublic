import React, { Component } from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default class ImageElement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.picTitle}</Text>
        <Image source={{ uri: this.props.picPath }} style={styles.image}></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
});
