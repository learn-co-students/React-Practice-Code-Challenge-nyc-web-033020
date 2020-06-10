import React from 'react'

const MoreButton = (props) => {
  console.log("btn",props)
    return <button onClick={props.getMore}>
            More sushi!
          </button>
}

export default MoreButton