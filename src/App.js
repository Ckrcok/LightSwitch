import "./App.css";
import Top from "./componenets/Top/Top";
import Bottom from "./componenets/Bottom/Bottom";
import React, { Component } from "react";

export default class App extends React.Component {
  state = {
    colour: "black"
  };

  handleOffButtonClicked = () => {
    console.log("Button Off Clicked");
    this.setState({ colour: "white" });
  };

  handleOnButtonClicked = () => {
    console.log("Button On Clicked");
    this.setState({ colour: "black" });
  };

  render() {
    return (
      <div className="App">
        <Top colour={this.state.colour} />
        <Bottom
          handleButtonOff={this.handleOffButtonClicked}
          handleButtonOn={this.handleOnButtonClicked}
        />
      </div>
    );
  }
}
