import React, { forwardRef, useImperativeHandle, useState } from "react";

const UseImperativeHadelc = (props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      add: () => {
        setCount(count + 1);
      }
    };
  });
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

export default forwardRef(UseImperativeHadelc);
