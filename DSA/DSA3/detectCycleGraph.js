
class Graph{
    constructor(){
        this.adjecentcyList = {}
    }
   addVertex(vertex){
    if(!this.adjecentcyList[vertex]){
        this.adjecentcyList[vertex] = new Set(vertex)
    }
   } 
   addEdge(vertex1, vertex2){
    if(this.adjecentcyList[vertex1]){
        this.adjecentcyList[vertex1].add(vertex2)
    }else {
        this.adjecentcyList[vertex1] = new Set([vertex1])
    }
   }
   hasCycle(){
    let visited = new Set()
    let recStack = new Set()
    const dfs = (vertex) => {
        if(recStack.has(vertex)){
            return true;
        }
        if(visited.has(vertex)){
            return false
        }
        visited.add(vertex)
        recStack.add(vertex)
        for(let neighbor of this.adjecentcyList[vertex] || []){
            if(dfs(neighbor)){
                return true
            }
        }
        recStack.delete(vertex)
        return false
    }
    for(let vertex in this.adjecentcyList){
        if(dfs(vertex)){
            return true
        }
    }
    return false
   }
   display(){
    for(let vertex in  this.adjecentcyList){
        console.log(`${vertex} -> ${[...this.adjecentcyList[vertex]].join(", ")}`);
        
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
g.addEdge("E")


g.display()
console.log(g.hasCycle())