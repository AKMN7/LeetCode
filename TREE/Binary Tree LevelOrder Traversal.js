// Question 102;

function levelOrder(root) {
    let q = [root];
    let ans = [];

    while (q[0]) {
        let row = [];
        let qlen = q.length;

        for (let i = 0; i < qlen; i++) {
            let current = q.shift();
            row.push(current.val);
            if (current.left) q.push(current.left);
            if (current.right) q.push(current.right);
        }

        ans.push(row);
    }

    return ans;
}