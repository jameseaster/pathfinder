import React from "react";
import Node from "./Node";
const Column = ({ col }) => {
  return (
    <div className="column">
      <Node node={col} />
    </div>
  );
};

export default Column;
