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
    matrix[row].push(i);
  }

  return matrix;
};

module.exports = generateMatrix;
