import React, { Component } from "react";
import { View, Text, ActivityIndicator, Dimensions, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import ImageElement from "./ImageElement";

const key = "f8ed956934813bb0dde52eca8defe4a0";
const secret = "a0f11fd3e748994f";
const { height } = Dimensions.get("window");

class GalleryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      screenHeight: 0,
      dataSource: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        key +
        "&tags=cars&per_page=20&page=1&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.photos.photo,
          isLoading: false,
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
      let counter = 0;
      let pictures = this.state.dataSource.map((pic, key) => {
        counter++;
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
      this.props.nummberOfLoadedPictures(counter);
      const scrollEnabled = this.state.screenHeight > height;
      return (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <Text>Number of loaded pictures : {this.props.picCount}</Text>
          <View style={styles.container}>{pictures}</View>
        </ScrollView>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    picCount: state.picCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nummberOfLoadedPictures: (data) => dispatch({ type: "NUMBER_OF_LOADED_PICTURES", payload: data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);

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
    height: Dimensions.get("window").height / 3 - 12,
    width: Dimensions.get("window").width - 4,
    backgroundColor: "#fff",
  },
});
