import React, { useRef } from 'react'
import UseImperativeHadelc from './UseImperativeHadelc'

const UseImperativeHadelp = () => {

    const parentRef=useRef(null)

  return (
    <div>
        <UseImperativeHadelc ref={parentRef}/>
        <button onClick={()=>parentRef.current.add()}>Add</button>
    </div>
  )
}

export default UseImperativeHadelp