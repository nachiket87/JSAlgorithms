const network = {
  Min: ['William', 'Jayden', 'Omar'],
  William: ['Min', 'Noam'],
  Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
  Ren: ['Jayden', 'Omar'],
  Amelia: ['Jayden', 'Adam', 'Miguel'],
  Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
  Noam: ['Nathan', 'Jayden', 'William'],
  Omar: ['Ren', 'Min', 'Scott'],
};

function bfs(graph, startNode, endNode) {
  const nodesToVisit = new Queue();
}
