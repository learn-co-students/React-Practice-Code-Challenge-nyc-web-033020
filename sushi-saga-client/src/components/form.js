import React, { Component } from "react";

class Form extends Component {
  state = {
    money: "",
  };

  handleInput = (event) => {
    const target = event.target;
    this.setState({ money: target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="money">Deposit Money</label>
          <input
            type="number"
            name="money"
            value={this.state.money}
            onChange={this.handleInput}
          />
          <input
            type="submit"
            value="deposit"
            onClick={(event) => {
              event.preventDefault();
              this.props.depositMoney(this.state.money);
            }}
          />
        </form>
      </div>
    );
  }
}

export default Form;
