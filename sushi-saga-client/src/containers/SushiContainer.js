import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const {sushis, eatSushi, displayMoreSushi, eatenSushi} = props
  // console.log(props.sushis)
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi key={sushi.id} {...sushi} 
            eatenSushi={eatenSushi} eatSushi={eatSushi}/>)
        }
        <MoreButton displayMoreSushi={displayMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer