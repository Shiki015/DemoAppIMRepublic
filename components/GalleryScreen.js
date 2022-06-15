import React, { Component } from "react";
import { View, Text, ActivityIndicator, TouchableWithoutFeedback, Dimensions, Modal, StyleSheet, ScrollView } from "react-native";
import ImageElement from "./ImageElement";

const key = "f8ed956934813bb0dde52eca8defe4a0";
const secret = "a0f11fd3e748994f";
const { height } = Dimensions.get("window");
export default class GalleryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        key +
        "&tags=cats&per_page=20&page=1&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.photos.photo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let pictures = this.state.dataSource.map((pic, key) => {
        return (
          <View key={key} style={styles.imageWrap}>
            <ImageElement
              key={key}
              picTitle={pic.title}
              picPath={"https:farm" + pic.farm + ".staticflickr.com/" + pic.server + "/" + pic.id + "_" + pic.secret + ".jpg"}
            ></ImageElement>
          </View>
        );
      });
      const scrollEnabled = this.state.screenHeight > height;
      return (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={styles.container}>{pictures}</View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#eee",
  },
  imageWrap: {
    margin: 2,
    marginTop: 10,
    padding: 2,
    height: Dimensions.get("window").height / 2 - 12,
    width: Dimensions.get("window").width - 4,
    backgroundColor: "#fff",
  },
});
