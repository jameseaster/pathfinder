import React, { useState } from "react";

const Node = ({ name }) => {
  const [color, setColor] = useState("white");

  const handleClick = (currentColor) => {
    console.log(name);
    if (currentColor === "white") {
      setColor("green");
    } else {
      setColor("white");
    }
  };
  return (
    <div
      className="node"
      style={{ backgroundColor: color }}
      onMouseDown={() => handleClick(color)}
    ></div>
  );
};

export default Node;
