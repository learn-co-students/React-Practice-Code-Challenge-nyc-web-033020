import React from 'react'


class Sushi extends React.Component {
  state = {
    eaten: false
  }

  eatenHandler = () => {
    this.setState({
      eaten: !this.state.eaten
    })
  }

  clickAction = (e) => {
    this.eatenHandler()
    this.props.eatenSushi(e.id)
  }

  render() {
    const { id, name, img_url, price, eatenSushi} = this.props
    console.log(this.props)
    return (
      <div id={id} className="sushi">
        <div className="plate" 
            onClick={() =>this.clickAction}>
          { this.state.eaten ?
              false
            :
              <img src={img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  }
}

export default Sushi
// "id": 1,
// "name": "Maguro Magic",
// "img_url": "./sushi/maguro.png",
// "price": 20,
// "created_at": "2018-07-27T18:53:16.241Z"