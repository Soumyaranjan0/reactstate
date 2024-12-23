import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const[ispending,stateTransition]= useTransition()

  const handelChange=(e)=>{
    setName(e.target.value)
    stateTransition(()=>{
        let arr=[]
        for(let i =0;i<20000;i++){
            arr.push(e.target.value)
        }
        setList(arr)
    })
  }
  return (
    <div>
      <input placeholder="name" onChange={handelChange} />
      <br/>
      {list.map((each)=>{
        return <h2>{each}</h2>
      })}
    </div>
  );
};

export default UseTransition;
