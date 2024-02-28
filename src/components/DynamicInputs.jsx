import React, { useState } from "react";

function DynamicInputs() {
  const [inputs, setInputs] = useState([""]);

  console.log("inputs => ", inputs);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const removeInput = (indexToRemove) => {
    setInputs(inputs.filter((input, index) => index !== indexToRemove));
  };

  const handleInputChange = (value, index) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div>
      <h2>Dynamic Inputs</h2>
      <button onClick={addInput}>Add Input</button>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e.target.value, index)}
          />
          <button onClick={() => removeInput(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default DynamicInputs;
