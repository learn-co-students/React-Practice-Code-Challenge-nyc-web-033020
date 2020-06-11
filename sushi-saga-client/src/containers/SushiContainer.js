import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => (
        <Sushi 
          handleCount={props.handleCount}
          key={sushi.id} 
          {...sushi}
          eatenSushis={props.eatenSushis} 
          eatSushi={props.eatSushi}
        />
        ))}
        <MoreButton renderNextSushis={props.renderNextSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer