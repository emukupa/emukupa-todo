import React from "react";

const Input = props => {
  const { inputChange, value } = props;
  return (
    <input onChange={inputChange} onSubmit={inputChange} type="text" placeholder="add item" value={value}/>
  );
};

export default Input;
