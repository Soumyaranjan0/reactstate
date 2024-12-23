import React from "react";
import CustomeHooks1 from "./CustomeHooks1";

const CustomeHooks = () => {
  const [count, add, minus, reset] = CustomeHooks1();

  return <div>
    <button onClick={add}>Add</button>
    <button onClick={minus}>Minus</button>
    <button onClick={reset}>Reset</button>
    <br/>
    <h3>{count}</h3>
  </div>;
};

export default CustomeHooks;
