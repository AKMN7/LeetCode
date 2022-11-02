// Question 653

function findTarget(root, k) {
    if (!root) return false;

    let set = new Set();
    let stack = [root];

    while (stack.length) {
        const node = stack.pop();
        if (set.has(k - node.val)) return true;
        set.add(node.val);
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right);
    }

    return false;
}