//? A Min-Heap is a binary tree where the value of each parent node is less than or equal to the values of its children. This property makes Min-Heaps particularly useful for scenarios where you need to efficiently retrieve the minimum element, such as in priority queues.


class MinHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(index){
        return ~~((index -1)/2)
    }
    getLeftChildIndex(index){
        return 2 * index +1
    }
    getRightChildIndex(index){
        return 2 * index +2
    }
    swap(idx1, idx2){
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
    }
    insert(ele){
        this.heap.push(ele)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length -1
        while(index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]){
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }
    extractMin(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }
    heapifyDown(index){
        let smallest = index;
        const leftChildIndex = this.getLeftChildIndex(index)
        const rightChildindex = this.getRightChildIndex(index)
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
            smallest = leftChildIndex
        }
        if(rightChildindex < this.heap.length && this.heap[rightChildindex] < this.heap[smallest]){
            smallest = rightChildindex
        }
        if(smallest !== index){
            this.swap(index, smallest)
            this.heapifyDown(smallest)
        }
    }
    peek(){
        if(this.heap.length === 0){
            return null
        }
        return this.heap[0]
    }
    size(){
        return this.heap.length
    }
}

const minHeap = new MinHeap()

minHeap.insert(10)
minHeap.insert(5)
minHeap.insert(20)
minHeap.insert(3)

console.log(minHeap.peek());
console.log(minHeap.extractMin());
console.log(minHeap.peek());
console.log(minHeap.size());
console.log(minHeap.extractMin());
console.log(minHeap.peek());




