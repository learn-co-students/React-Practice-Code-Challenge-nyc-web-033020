import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

class SushiContainer extends React.Component {

  render(){

    const {sushis, removeSushi, getMore, start, eatenSushi} =this.props
    // console.log(this.props)
    

    return (
      <Fragment>
        <div className="belt">
          {sushis.slice(start, start+4).map(sushi=><Sushi sushi={sushi} key={sushi.id} removeSushi={removeSushi} eatenSushi={eatenSushi} />)}
        
          <MoreButton  getMore={getMore}/>
        </div>
      </Fragment>
    )
  }
}

  


export default SushiContainer