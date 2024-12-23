import { useState } from "react";

const CustomeHooks1 = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return [count, add, minus, reset];
  
};

export default CustomeHooks1;
