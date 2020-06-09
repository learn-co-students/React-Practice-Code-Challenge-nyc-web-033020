import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state ={
    sushis: [], 
    eatenSushi: []
  }

  componentDidMount() {
    fetch(`${API}/?_limit=4`)
    .then(res => res.json())
    .then(sushis => {
      this.setState({ sushis })
    })
  }

  eatenSushi = (id) => {
    let sushi = this.state.sushis.filter(s => s.id === id)
    this.setState({
      ...this.state.eatenSushi,
      eatenSushi: sushi
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatenSushi={this.eatenSushi} />
        <Table plates={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;