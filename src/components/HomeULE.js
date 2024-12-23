import React from "react";
import { Link } from "react-router-dom";

const HomeULE = () => {
const name="Soumya Ranjan Behera"

  return <div>
    HomeULE
    <Link to="/nav" state={{name}}>Details</Link>
  </div>;
};

export default HomeULE;
