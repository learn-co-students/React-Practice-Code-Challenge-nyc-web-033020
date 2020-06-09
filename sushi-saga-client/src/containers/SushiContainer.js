import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={props.eatSushi}/> )}
        <MoreButton nextForSushis={props.nextForSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer