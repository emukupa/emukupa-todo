import React from "react";

const Button = props => {
  const { buttonClick } = props;

  return <button onClick={buttonClick}>Add</button>;
};

export default Button;
