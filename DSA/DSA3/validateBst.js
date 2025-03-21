function TreeNodes (val, left, right){
    this.val = val
    this.left = null
    this.right = null
}

var validateBst = function(root){
    const validate = (node, low, high) => {
        if(node === null) return true;
        if(node.val < low || node.val > high){
            return false
        }
        return validate(node.left, low, node.val) && validate(node.right, node.val, high)
    }
    return validate(root, -Infinity, Infinity)

}

const root = new TreeNodes(2)
root.left = new TreeNodes(1)
root.right = new TreeNodes(3)

console.log(validateBst(root));
root.right.left = new TreeNodes(4)
console.log(validateBst(root));