import React, { Component } from "react";
import Svg, { Path, Polygon, Line, Rect } from "react-native-svg";

export default class Monitor extends Component {
  render() {
    return (
      <Svg
        width="300px"
        height="300px"
        viewBox="0 0 300 300"
        id="Layer_1"
        style="enable-background:new 0 0 300 300;"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <Polygon fill="#E0D671" points="290,45 10,195 290,195 " />
        <Rect fill="none" stroke="#2D3642" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" height="150" width="280" x="10" y="45" />
        <Line fill="none" stroke="#2D3642" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" x1="100" x2="200" y1="255" y2="255" />
        <Rect fill="none" stroke="#2D3642" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" height="60" width="40" x="130" y="195" />
        <Path fill="#168C84" d="M252,245h6c6.6,0,12,5.4,12,12l0,0v8l0,0h-30l0,0v-8C240,250.4,245.4,245,252,245L252,245z" />
      </Svg>
    );
  }
}
