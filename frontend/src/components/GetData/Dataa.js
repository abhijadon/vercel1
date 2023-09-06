import React, { useEffect, useState } from "react";
import Data from "./Data";

const Dataa = () => {
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState();
  useEffect(() => {
    fetch("api")
      .then((data) => data.json())
      .then((val) => setValues(val));
  }, []);
  return (
    <>
      <form className="w-full form" method="POST">
        <select name="" id="" onChange={(e) => setOptions(e.target.value)}>
          {values.map((opts, i) => {
            <option value="" key={i}>
              {opts.name}
            </option>;
          })}
        </select>
      </form>
    </>
  );
};

export default Dataa;
