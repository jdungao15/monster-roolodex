import "./App.css";
import Card from "./Card";
import { robots } from "./robot";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <>
        <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </>
    );
  }
}

export default App;
