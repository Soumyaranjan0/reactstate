import React, { useState } from "react";
import "../App.css";
import Child from "./Child";

function countinitial() {
  console.log("run function");
  return 4;
}

function Counter() {
  //you can use state hook in these ways

  // const[count,setCount]=useState(4)
  const message = "Hello kartik! Good Morning";
  const [count, setCount] = useState(countinitial());
  const [theme, setTheme] = useState("blue");

  // const[count,setCount]=useState(()=>{
  //   console.log("run function")
  //   return 4;
  // })

  function decrement() {
    // setCount(count-1)
    setCount((prevcount) => prevcount - 1);
  }
  function increment() {
    setCount(count + 1);
    // setCount(prevcount=>prevcount+1)
    setTheme("red ");
  }
  return (
    <>
    <button onClick={decrement}>-</button>
      <span> {count} </span>
      <span> {theme} </span>
      <button onClick={increment}>+</button>
      <Child message={message}></Child>
    </>
  );
}

export default Counter;
