import React from "react";
import Node from "./Node";
const Column = ({ col }) => {
  return (
    <div className="column">
      <Node name={col} />
    </div>
  );
};

export default Column;
