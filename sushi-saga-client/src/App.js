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
    sushiEaten: [],
    moneyLeft: 120,
    totalPrice: 0,
    additionalMoney: ''
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

  addYourMoney = (e) => {
     this.setState({ [e.target.name]: e.target.value })
  }

  addMoneyToState = () => {
    let money = parseInt(this.state.additionalMoney)
    this.setState({ moneyLeft: this.state.moneyLeft + money})
    this.setState({ additionalMoney: '' })
  }

  eatSushi = (sushiId) => {
    let eastenSushi = this.state.sushis.find(sushi => sushi.id === sushiId)
    if (this.state.moneyLeft < eastenSushi.price){
      alert('OUT OF MONEY!')
    } else {
        const sushisToChange = this.state.sushis.slice()
        let index = this.state.sushis.indexOf(eastenSushi)
        this.setState({ sushiEaten: [...this.state.sushiEaten, eastenSushi]})
        this.setState({ totalPrice: this.state.totalPrice + eastenSushi.price})
        this.setState({ moneyLeft: this.state.moneyLeft - eastenSushi.price})
        eastenSushi.img_url = null 
        sushisToChange[index] = eastenSushi
        this.setState({ sushis: sushisToChange })
    }
  }

  render() {
    return (
      <div className='app'>
        <SushiContainer sushis={this.fourAtATime(this.state.firstSushiShown, this.state.lastSushiShow)} nextForSushis={this.nextForSushis} eatSushi={this.eatSushi}/>
        <Table addMoneyToState={this.addMoneyToState} onChange={this.addYourMoney} additionalMoney={this.state.additionalMoney} eatenSushis={this.state.sushiEaten} moneyLeft={this.state.moneyLeft} totalPrice={this.state.totalPrice}/>
      </div>
    )
  }
}

export default App;