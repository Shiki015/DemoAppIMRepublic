import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./components/HomeScreen";
import GalleryScreen from "./components/GalleryScreen";

const initialState = {
  picCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NUMBER_OF_LOADED_PICTURES":
      return { ...state, picCount: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Gallery" component={GalleryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const Stack = createNativeStackNavigator();
