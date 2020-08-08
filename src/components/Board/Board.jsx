import React from "react";
import "./Board.css";
import Row from "../Row";

const Board = ({ matrix }) => {
  return (
    <div className="board">
      {matrix.map((row, index) => (
        <Row row={row} key={index} />
      ))}
    </div>
  );
};

export default Board;
