class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].add([vertex2]);
    } else {
      this.adjacencyList[vertex1] = new Set([vertex2]);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].delete(vertex2);
    }
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
    for (let otherVertex of this.adjacencyList) {
      this.adjacencyList[otherVertex].delete(vertex);
    }
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${[this.adjacencyList[vertex]].join(", ")}`);
    }
  }
}


const graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")


graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('D', 'C')
 
graph.display()