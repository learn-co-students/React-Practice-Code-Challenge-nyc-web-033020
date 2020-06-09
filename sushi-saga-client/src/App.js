import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [ ],
    firstSushiShown: 0, 
    lastSushiShow: 4,
    sushiEaten: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({ sushis }))
  }

  fourAtATime = (whereToStart, whereToStop) => {
    const sushis = this.state.sushis.slice()
    let showSushis = sushis.splice(whereToStart, whereToStop)
    return showSushis
  }

  nextForSushis = () => {
   this.setState({ firstSushiShown: this.state.firstSushiShown + 4 })  
  }

  eatSushi = (sushiId) => {
    const sushisToChange = this.state.sushis.slice()
    let eastenSushi = this.state.sushis.find(sushi => sushi.id === sushiId)
    let index = this.state.sushis.indexOf(eastenSushi)
    this.setState({ sushiEaten: [...this.state.sushiEaten, eastenSushi]})
    eastenSushi.img_url = null 
    sushisToChange[index] = eastenSushi
    this.setState({ sushis: sushisToChange })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.fourAtATime(this.state.firstSushiShown, this.state.lastSushiShow)} nextForSushis={this.nextForSushis} eatSushi={this.eatSushi}/>
        <Table eatenSushis={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;