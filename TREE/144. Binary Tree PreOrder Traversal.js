function preorderTraversal(root) {
    let result = [];
    helper(root, result);
    return result;
}

function helper(node, res) {
    if (node != null) {
        res.push(node.val);
        helper(node.left, res);
        helper(node.right, res);
    }
}