import React from 'react';
import Usecontextgc from './Usecontextgc';
import { useContext } from "react";
import { CountContext } from "./Usecontextp";

const Usecontextc = () => {

    const {setCount} =useContext(CountContext)
    const {count} =useContext(CountContext)
    

  return (
    <div>
        <Usecontextgc />
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Usecontextc