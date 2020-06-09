import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const {sushis, eatenSushi} = props
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi key={sushi.id} {...sushi} eatenSushi={eatenSushi}/>)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer