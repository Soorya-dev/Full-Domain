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
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].add(vertex2);
    } else {
      this.adjacencyList[vertex1] = new Set([vertex2]);
    }
  }
  dfs(startVertex) {
    let result = [];
    let visited = new Set();
    const dfssearch = (vertex) => {
      if (!vertex || visited.has(vertex)) return;
      visited.add(vertex);
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        dfssearch(neighbor);
      });
    };
    dfssearch(startVertex);
    return result;
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${[...this.adjacencyList[vertex]].join(", ")}`);
    }
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfs("A", "result"));

g.display();
