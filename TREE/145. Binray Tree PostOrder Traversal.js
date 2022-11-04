function postorderTraversal(root) {
    let result = [];
    helper(root, result);
    return result;
}

function helper(node, res) {
    if (node != null) {
        helper(node.left, res);
        helper(node.right, res);
        res.push(node.val);
    }
}