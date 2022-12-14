class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function insertIntoBST(root, val) {
    if (root == null) return new TreeNode(val);
    if (root.val > val) root.left = insertIntoBST(root.left, val);
    if (root.val < val) root.right = insertIntoBST(root.right, val);
    return root;
}