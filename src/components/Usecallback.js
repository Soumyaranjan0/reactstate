import React, { useCallback, useState } from "react";
import Usecallback1 from "./Usecallback1";

const Usecallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  const sample=useCallback(()=>{
    return count1
  },[count1])

  return (
    <div>
      <Usecallback1 sample={sample}/>
      <button onClick={() => setCount1(count1 + 1)}>Add</button>
      <button onClick={() => setCount2(count2 - 1)}>Minus</button>
      <br/>
      <h1>{count2}</h1>
    </div>
  );
};

export default Usecallback;
