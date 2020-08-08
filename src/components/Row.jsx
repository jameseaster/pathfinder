import React from "react";
import Column from "./Column";

const Row = ({ row }) => {
  return (
    <div
      className="row"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {row.map((col, index) => (
        <Column col={col} key={index} />
      ))}
    </div>
  );
};

export default Row;
