import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    displaySushis: [],
    eatenSushis: [], //array of ids
    x: 0,
    y: 4,
    tableMoney: 100
  }

  fetchAllSushis = () => {
    fetch(API)
      .then(r => r.json())
      .then(sushis => {
        this.setState({ sushis })
        // this.setState({renderedSushis: sushis})
      })
  }

  componentDidMount() {
    this.fetchAllSushis()
  }

  renderNextSushis = () => {
    this.setState({ x: this.state.x + 4 })
    this.setState({ y: this.state.y + 4 })

    this.setState({ displaySushis: this.state.sushis.slice(this.state.x, this.state.y) })
  }

  handleCount = () => {
    this.setState({count: this.state.count + 1})
  }

  eatSushi = (id, price) => {
    // finding the sushi to find its price, you could pass price in when eatSushi is invoked instead
    // const eatenSushi = this.state.sushis.find(sushi => sushi.id === id);
    console.log(price)

    if(!this.state.eatenSushis.includes(id) /*&& this.state.tableMoney >= price*/ ){ //(this.state.tableMoney - price) >= 0
      this.setState(prevState => ({ 
        eatenSushis: [...prevState.eatenSushis, id],
        tableMoney: prevState.tableMoney - price
      }))
    } else {
      alert('you already ate that one')
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          handleCount={this.handleCount}
          sushis={this.state.displaySushis}
          renderNextSushis={this.renderNextSushis}
          eatenSushis={this.state.eatenSushis} 
          eatSushi={this.eatSushi}/>          
        />
        <Table 
          eatenSushis={this.state.eatenSushis}
          tableMoney={this.state.tableMoney}
        />
      </div>
    );
  }
}

export default App;