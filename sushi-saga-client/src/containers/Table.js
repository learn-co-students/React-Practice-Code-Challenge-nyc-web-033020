import React, { Fragment } from 'react'

const Table = (props) => {
   console.log(props)
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  let moneyLeft = 120

  let sushisEaten = props.eatenSushis.map(sushi => sushi.price)
  
  let totalPrice = sushisEaten.reduce((a,b) => a + b, 0)
 
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${moneyLeft - totalPrice} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatenSushis)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table