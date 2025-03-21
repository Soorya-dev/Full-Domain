class Graph{
  constructor(){
    this.adjacentcyList = {}
  }
  addVertex(vertex){
    if(!this.adjacentcyList[vertex]){
      this.adjacentcyList[vertex] = new Set()
    }
  }
  addEdge(vertex1, vertex2){
    if(this.adjacentcyList[vertex1]){
      this.adjacentcyList[vertex1].add(vertex2)
    }else {
      this.adjacentcyList[vertex1] = new Set([vertex2])
    }
  }
  bfs(startVertex){
    const result = []
    const visited = new Set()
    const queue = [startVertex]
    visited.add(startVertex)
    while(queue.length > 0){
      const vertex = queue.shift()
      result.push(vertex)
      this.adjacentcyList[vertex].forEach(neighbor=> {
        if(!visited.has(neighbor)){
          visited.add(neighbor)
          queue.push(neighbor)
        }
      });
    }
    return result
  }
  display(){
    for(let vertex in  this.adjacentcyList){
      console.log(`${vertex} -> ${[...this.adjacentcyList[vertex]].join(", ")}`);
      
    }
  }
}

const g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")

g.addEdge("A", "B")
g.addEdge("B", "C")
g.addEdge("C", "D")
g.addEdge("D", "E")

g.display()
console.log(g.bfs("C"));
