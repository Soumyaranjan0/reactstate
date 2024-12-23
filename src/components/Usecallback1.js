import React, { memo } from 'react'

const Usecallback1 = ({sample}) => {

console.log("This is Home component");

  return (
    <div>
        <h1>{sample()}</h1>
    </div>
  )
}

export default memo(Usecallback1)