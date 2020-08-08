import React, { useState } from "react";

const Node = ({ node }) => {
  const [color, setColor] = useState(node.color);
  // const [id, setId] = useState(node.id);
  // const [wall, setWall] = useState(node.wall);
  // const [start, setStart] = useState(node.start);
  // const [end, setEnd] = useState(node.end);
  // const [searched, setSearched] = useState(node.searched);
  // const [value, setValue] = useState(node.value);
  // const [prev, setPrev] = useState(node.prev);

  const changeColor = () => {
    if (color !== "red" && color !== "navy") {
      color === "white" ? setColor("teal") : setColor("white");
    }
    console.log(node.id);
  };

  return (
    <div
      className="node"
      style={{ backgroundColor: color }}
      onMouseDown={changeColor}
    ></div>
  );
};

export default Node;
