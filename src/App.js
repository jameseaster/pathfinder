import React from "react";

import Menu from "./components/Menu/Menu";
import Board from "./components/Board/Board";
import generateMatrix from "./Matrix";
function App() {
  const matrix = generateMatrix();
  return (
    <div>
      <Menu />
      <Board matrix={matrix} />
    </div>
  );
}

export default App;
