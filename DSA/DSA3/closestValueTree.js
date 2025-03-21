function TreeNode(val, left, right) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var closestValue = (root, target) => {
  let closest = root.val;
  console.log(closest,'clllllll');
  //console.log(root);
  
  
  while (root !== null) {
    console.log(target - root.val, 'nor');
    
    console.log(Math.abs(target - root.val),'root');
    console.log(Math.abs(target - closest),'closest');
    if (Math.abs(target - root.val) < Math.abs(target - closest)) {
      closest = root.val;      
    }
    console.log(closest,'124');
    if (target < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return closest;
};

const root = new TreeNode(4)

root.left = new TreeNode(2)
root.right = new TreeNode(5)
root.left.left = new TreeNode(1)
root.right.right = new TreeNode(3)

let target = 3.6 
console.log(closestValue(root, target));


