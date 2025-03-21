class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].add([vertex2]);
      this.adjacencyList[vertex2].add([vertex1]); // Since it's an undirected graph
    }
  }

  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", this.adjacencyList[vertex].join(", "));
    }
  }
}

// Example usage
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");

g.printGraph();
// Output:
// A -> B, C
// B -> A, C
// C -> A, B
