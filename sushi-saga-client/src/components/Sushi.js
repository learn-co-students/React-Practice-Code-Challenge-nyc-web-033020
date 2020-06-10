import React, { Fragment } from 'react'

class Sushi extends React.Component{

  render () {
    const {img_url, name,price, id} = this.props.sushi
    console.log(this.props.eatenSushi)
    return (

      <div className="sushi">
        <div className="plate" onClick={()=>this.props.removeSushi(id,price)}>
          {this.props.eatenSushi.includes(id) ? null:<img src={img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )

  }
}


export default Sushi