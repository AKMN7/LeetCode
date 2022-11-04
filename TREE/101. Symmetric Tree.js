function isSymmetric(root) {
    if (!root) return true;

    function isMirror(s, t) {
        if (!s && !t) return true;
        if (!s || !t || s.val !== t.val) return false;
        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }

    return isMirror(root.left, root.right);
}