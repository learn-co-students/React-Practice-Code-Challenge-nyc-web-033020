import React from 'react'


class Sushi extends React.Component {
  

  render() {
    const { id, name, img_url, price, eatSushi, eatenSushi} = this.props
    // console.log(this.props)
    return (
      <div className="sushi"
        onClick={() => eatSushi(id , price)}>
        <div className="plate">
          { eatenSushi.includes(id) ?
              null
            :
              <img  src={img_url} width="100%" />
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