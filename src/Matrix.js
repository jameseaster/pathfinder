const generateMatrix = () => {
  const matrix = [];
  let row = 0;
  for (let i = 0; i < 25; i++) {
    matrix.push([]);
  }

  for (let i = 0; i < 625; i++) {
    if (i > 0 && i % 25 === 0) {
      row += 1;
    }
    let color = "teal";
    let end = false;
    let start = false;
    if (i === 255) {
      start = true;
      color = "navy";
    }
    if (i === 260) {
      end = true;
      color = "red";
    }

    matrix[row].push({
      id: i,
      color,
      wall: false,
      start,
      end,
      searched: false,
      value: Infinity,
      prev: null,
    });
  }

  return matrix;
};

module.exports = generateMatrix;
