import React, {useRef}from 'react'


const Useref = () => {

    const nameRef=useRef(null)

    const login =()=>{
        nameRef.current.focus()
    }

  return (
    <div>
        <input type="text" placeholder='Name' ref={nameRef}></input>
        <br/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Useref;