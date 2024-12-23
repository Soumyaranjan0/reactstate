import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const headingRef = useRef(null);

//useLayoutEffect is invoke faster then the useeffect Hook.

//   useEffect(() => {
//     if (headingRef.current !== null) {
//       headingRef.current.style.marginTop = `${200}px`;
//     }
//     // console.log("This is useEffect");
//   }, []);

useLayoutEffect(() => {
    if (headingRef.current !== null) {
      headingRef.current.style.marginTop = `${200}px`;
    }
  }, []);

  // useLayoutEffect(()=>{
  //     console.log("This is useLayoutEffect");
  // },[])

  return (
    <div>
      <h2 ref={headingRef}>Nelson Mandela</h2>
    </div>
  );
};

export default UseLayoutEffect;
