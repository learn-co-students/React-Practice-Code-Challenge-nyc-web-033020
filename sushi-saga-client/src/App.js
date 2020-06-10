import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis'

class App extends Component {

  state ={
    sushis: [],
    total: 100, 
    eatenSushi:[],
    start:0
  }


  componentDidMount () {

    fetch(API)
    .then(r=>r.json())
    .then(data => {
      this.setState({sushis: data})
    })
  }

  removeSushi = (id,price) => {
    let targetSushi = this.state.sushis.find(sushi=> sushi.id === id )
    let balance = this.state.total - price 
    if(this.state.total-price >=0){
      this.setState({total: balance})
      this.setState({eatenSushi: [...this.state.eatenSushi,targetSushi.id]})
    }else{
      alert('sorry, you need to refill your wallet')
    }  
  }
  
  getMore = () => {
    this.setState({start: this.state.start+4})
    if(this.state.start>=100){
      this.setState({start: 0})
    }
  }

  render() {
    console.log("app:::", this.state)
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.state.sushis}
        removeSushi={this.removeSushi}
        getMore={this.getMore}
        start={this.state.start}
        eatenSushi= {this.state.eatenSushi}
        />
        <Table total={this.state.total} eatenSushi= {this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;