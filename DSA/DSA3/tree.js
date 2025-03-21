//! Trees

//* Trees are a data structures that link nodes in a parent/child relationship, in the sense that there're nodes that depend on or come off other nodes.

//? Trees are formed by a root node (the first node on the tree), and all the nodes that come off that root are called children.
//? The nodes at the bottom of the tree, which have no "descendants", are called leaf nodes.
//? The height of the tree is determined by the number of parent/child connections it has.

//! Unlike linked list or arrays, trees are non linear,

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(val) {
    this.root = new Node(val);
    this.count = 1;
  }

  size() {
    return this.count;
  }
  insert(val) {
    this.count++;
    let newNode = new Node(val);
    const searchTree = (node) => {
      //* if value < node.val, go left
      if (val < node.val) {
        //* if no left child, append new node
        if (!node.left) {
          node.left = newNode;
          //* if left child, look left again
        } else {
          searchTree(node.left);
        }
      }
      //* if value > node.val, go right.
      else if (val > node.val) {
        //* if no right child, append new node

        if (!node.right) {
          node.right = newNode;
          //* if right child, look right again
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }
  min() {
    let currNode = this.root;
    //* continue traversing left until no more children
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.val;
  }
  max() {
    let currNode = this.root;
    //* continue traversing right until no more children
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.val;
  }
  contain(val) {
    let currNode = this.root;
    while (currNode) {
      if (val === currNode.val) {
        return true;
      }
      if (val < currNode.val) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return false;
  }
  //? depth first search - branch by branch

  //*in-order
  //? left, root, right
  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      //* if left child exist, go left again
      if (node.left) traverse(node.left);
      //* capture root node value
      result.push(node.val);
      //* if right child exist, go right again
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  //* pre-order
  //? root, left, right
  dfsPreOrder() {
    let result = [];
    const traverse = (node) => {
      //* capture root node value
      result.push(node.val);
      //* if left child exist, go left again
      if (node.left) traverse(node.left);
      //* if right child exist, go right again
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  //* post-order
  //? left, right, root
  dfsPostOrder() {
    let result = [];
    const traverse = (node) => {
      //* if left child exist, go left again
      if (node.left) traverse(node.left);
      //* if right child exist, go right again
      if (node.right) traverse(node.right);
      //* capture root node value
      result.push(node.val);
    };
    traverse(this.root);

    return result;
  }

  //? breadth first search - level by level

  //* use queue
  bfs() {
    let result = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let currNode = queue.shift();
      result.push(currNode.val);

      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst.size());
console.log(bst.min());
console.log(bst.max());
console.log(bst.contain(28));


//? DFS
//* in-order: 2,3,12,15,28,36,39
console.log(bst.dfsInOrder());
//* pre-order: 15,3,2,12,36,28,39
console.log(bst.dfsPreOrder());
//* post-order: 2,12,3,28,39,36,15
console.log(bst.dfsPostOrder());

console.log(bst.bfs(),'zxcvbnm');

