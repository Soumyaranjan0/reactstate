import React, { useState } from "react";



function From() {
  const head = {
    color: "Black",
  };

  const [fields, setFields] = useState([{ value: "" }]);

  const handelAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handelChange = (index, event) => {
    const newfields = [...fields];
    newfields[index].value = event.target.value;
    setFields(newfields);
  };

  const handelRemove = (index) => {
    const newfields = [...fields];
    newfields.splice(index, 1);
    setFields(newfields);
  };

  const handelSubmit = () => {
    console.log("form value", fields);
  };

  return (
    <>
    <div className="container">
      <h2 style={head}>Dynamic From</h2>
      <form>
        {fields.map((field, index) => (
          <div className="inputField" key={index}>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handelChange(index, e)}
              placeholder="Enter value"
            />
            <button type="button" onClick={() => handelRemove(index)}>
              Remove
            </button>
          </div>
        ))}
      </form>
      <button type="button" onClick={handelAddField}>
        Add Field
      </button>
      <button type="button" onClick={handelSubmit}>
        Submit
      </button>
    </div>
  </>
  );
}

export default From;
