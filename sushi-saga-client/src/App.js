import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushi: [],
    displayedSushi: [],
    nextSushiIndex: 0,
    fatStacks: 1000000,
    plates: [],
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((sushi) => {
        this.setState({ allSushi: sushi });
        this.displaySushi();
      });
  }

  displaySushi = () => {
    const arr = [];
    let nextSushi = this.state.nextSushiIndex;

    for (let i = 0; i < 4; i++) {
      arr.push(this.state.allSushi[nextSushi]);
      nextSushi++;
    }

    this.setState({
      displayedSushi: arr,
      nextSushiIndex: nextSushi,
    });
  };

  handleTable = (sushi) => {
    this.setState({
      fatStacks: this.state.fatStacks - sushi.price,
      plates: [...this.state.plates, sushi],
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.displayedSushi}
          moreSushi={this.displaySushi}
          handleTable={this.handleTable}
        />
        <Table money={this.state.fatStacks} plates={this.state.plates} />
      </div>
    );
  }
}

export default App;

