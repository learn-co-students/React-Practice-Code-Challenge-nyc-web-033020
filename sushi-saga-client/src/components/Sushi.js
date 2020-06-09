// import React, { Fragment } from "react";
import React, { Component } from "react";

class Sushi extends Component {
  state = {
    eaten: false,
  };

  eatSushi = () => {
    this.setState({ eaten: true });
  };

  render() {
    const sushi = this.props.sushi;
    return (
      <div className="sushi">
        <div
          className="plate"
          onClick={() => {
            if (!this.state.eaten && this.props.money >= sushi.price) {
              this.eatSushi();
              this.props.handleTable(sushi);
            }
          }}
        >
          {this.state.eaten ? null : (
            <img src={sushi.img_url} alt={sushi.name} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;

