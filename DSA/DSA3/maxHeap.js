//? Heaps are another type of tree that have some particular rules. There are two main types of heaps, MaxHeaps and MinHeaps. In MaxHeaps, parent nodes are always greater than its children, and in MinHeaps, parent nodes are always smaller than its children.
//[10,8,9,6,7,4,6]
// 0  1 2 3 4 5 6
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    return ~~((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  insert(ele) {
    this.heap.push(ele);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] > this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }
  extraxtMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }
  //delete cheyyumbol topil ninn cheyyum.then last element will be added to top
  // and it will compare to each child if the value is less than child in a max heap
  //it will swap
  heapifyDown(index) {
    let largest = index;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largest]
    ) {
      largest = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largest]
    ) {
      largest = rightChildIndex;
    }
    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }
  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(3);

console.log(maxHeap.peek());
console.log(maxHeap.extraxtMax());
console.log(maxHeap.peek());
console.log(maxHeap);
