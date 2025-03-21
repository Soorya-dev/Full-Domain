function TreeNodes (val, left, right){
    this.val = val
    this.left = null
    this.right = null
}

var heightCheck = function(root){
    if(root === null) return -1
    let leftHeight = heightCheck(root.left)
    let rightHeight = heightCheck(root.right)

    return Math.max(leftHeight, rightHeight) + 1
}

const root = new TreeNodes(5)

root.left = new TreeNodes(3)
root.right = new TreeNodes(8)
root.left.left = new TreeNodes(2)
root.left.right = new TreeNodes(6)
root.left.right.left = new TreeNodes(4)
root.right.right = new TreeNodes(13)
root.right.right.left = new TreeNodes(9)
root.right.right.left.right = new TreeNodes(15)

console.log(heightCheck(root))