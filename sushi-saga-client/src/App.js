import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state ={
    sushiStart: 0,
    sushis: [], 
    sushisBeingDisplayed: [],
    eatenSushi: [],
    money: 100,
    addingMoney: ''
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({ sushis })
    })
  }

  eatSushi = (id, price) => {
    const tableMoney = this.state.money
    if (!this.state.eatenSushi.includes(id) && tableMoney >= price){
        const newTotal = tableMoney - price
        this.setState({
          eatenSushi: [...this.state.eatenSushi, id],
          money: newTotal
      }) 

      } else {
        alert("You eat what is not there!")
      }
  }
  

  displayMoreSushi = () => {
    this.setState({
      sushiStart: this.state.sushiStart + 4,
    })
  }

  handleAddingMoney = (e) => {
    this.setState({
      addingMoney: e.target.value
    })
  }

  handleSubmission = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      money: prevState.money + parseInt(this.state.addingMoney),
      addingMoney: ''
    }))

  }

  render() {
    const start = this.state.sushiStart


    let displaySushi = this.state.sushis.slice(start, start + 4)

    console.log(this.state)
    return (
      <div className="app">
        <form onSubmit={this.handleSubmission}>
          <input value={this.state.addingMoney} onChange={this.handleAddingMoney} placeholder='Add money here'/>
          <button type='submit' > add money! </button>
        </form>


        <SushiContainer sushis={displaySushi} displayMoreSushi={this.displayMoreSushi} 
          eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi} />
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;