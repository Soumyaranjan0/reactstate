import React from "react";
import { useContext } from "react";
import {CountContext} from "../components/Usecontextp"


const Usecontextggc = () => {

    const{count}=useContext(CountContext)

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};

export default Usecontextggc;
