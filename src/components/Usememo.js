import React, { useState, useMemo } from "react";

const Usememo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const add = () => {
    setCount1(count1 + 1);
  };
  const minus = () => {
    setCount2(count2 - 1);
  };

  const sample = useMemo(() => {
    console.log("This is sample function");
    return count2;
  }, [count2]);

  return (
    <div>
      {sample}
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
      <br />
      {count1}
    </div>
  );
};

export default Usememo;
