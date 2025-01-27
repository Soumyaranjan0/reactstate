import React, { useEffect ,useState } from "react";
//useEffect
//use: perform side effects
//Side effects: Actions which are performed with outside world.Outside of rect component
//Example:API calls

const Useeffect = () => {
  const [view, setView] = useState(false);
  const [add, setAdd] = useState(false);
  const [isfetch, setIsfetch] = useState(false);

  const getdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=> res.json())
      .then(json => console.log(json));
  };
  useEffect(() => {
    getdata();
  }, [isfetch]);

  return (
    <>
      <button onClick={() => setAdd(!add)}>Add</button>
      <button onClick={() => setView(!view)}>View</button>
      {view && <h4>Will Smith</h4>}
      {add && <h4>Einstein</h4>}
      <button onClick={() => setIsfetch(!isfetch)}>fetch</button>
    </>
  );
};
export default Useeffect;
