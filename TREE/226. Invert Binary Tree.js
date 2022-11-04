function invertTree(root) {
    if (root == null) return null;

    let leftNode = invertTree(root.left);
    let rigthNode = invertTree(root.right);

    [root.left, root.right] = [rigthNode, leftNode];

    return root;
}