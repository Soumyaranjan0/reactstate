import React, { useState } from "react";
import Usecontextc from "./Usecontextc";
//Use : Overcome the props driling
//prop drilling mean: parent child grand child  grand grand child
import { createContext } from "react";

export const CountContext = createContext(null);

const Usecontextp = () => {
  //craeteContext
  //useContext

  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
      <Usecontextc />
      </CountContext.Provider>
    </div>
  );
};

export default Usecontextp;
