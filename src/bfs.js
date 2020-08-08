function bfs(start, end, matrix, setSearched) {
  // current node
  let currentNode;
  // TODO: create setSearched that changes color to purple
  start.searched = true;

  // create a queue with start node
  const queue = [start];

  // while queue is not empty
  while (queue.length) {
    // pull first node off of queue
    currentNode = queue.shift();

    // check if it is the end
    if (currentNode.end) {
      console.log(currentNode);
      return;
    }
    // push surrounding non-searched nodes to queue
    surroundingNodes(currentNode.id, matrix, queue);
  }

  return;
}

function surroundingNodes(id, matrix, queue) {
  // [top, right, bottom, left]
  let width = matrix[0].length;
  let height = matrix.length;

  // TODO: make sure these values exist
  let top = matrix[Math.floor(id / height) - 1][id % width];
  let right = matrix[Math.floor(id / height)][id + 1];
  let bottom = matrix[Math.floor(id / height) + 1][id % width];
  let left = matrix[Math.floor(id / height)][id - 1];

  const neighbors = [top, right, bottom, left];
  // iterate over nodes
  neighbors.forEach((neighbor) => {
    //// if node has not been searched
    if (!neighbor.searched) {
      // mark as searched
      neighbor.searched = true;
      // add to queue
      queue.push(neighbor);
    }
  });
}

module.exports = bfs;
