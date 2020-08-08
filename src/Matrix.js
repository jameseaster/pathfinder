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
    if (i === 255) color = "navy";
    if (i === 270) color = "red";

    matrix[row].push({
      id: i,
      color,
      wall: false,
      start: false,
      end: false,
      searched: false,
      value: Infinity,
      prev: null,
    });
  }

  return matrix;
};

module.exports = generateMatrix;
