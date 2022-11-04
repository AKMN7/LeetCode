function searchBST(root, val) {
    let result = null;

    function helper(node) {
        if (!node) return;
        if (node.val === val) {
            result = node;
            return;
        }
        if (val < node.val) helper(node.left);
        if (val > node.val) helper(node.right);
    }

    helper(root);
    return result;
}
