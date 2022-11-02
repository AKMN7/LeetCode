// Question 104

function maxDepth(root) {
    return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}