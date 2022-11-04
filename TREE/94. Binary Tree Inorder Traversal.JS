function inorderTraversal(root) {
    let result = [];
    helper(root, result);
    return result;
}

function helper(node, res) {
    if (node != null) {
        helper(node.left, res);
        res.push(node.val);
        helper(node.right, res);
    }
}