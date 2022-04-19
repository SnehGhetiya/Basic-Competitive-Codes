class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const binaryTreeSumRecursive = (root) => {
//     if (root === null) return 0;
//     return root.val + binaryTreeSumRecursive(root.left) + binaryTreeSumRecursive(root.right);
// }

const binaryTreeSum = (root) => {
    if (root === null) return 0;
    const queue = [root];
    let total = 0;
    while (queue.length > 0) {
        const current = queue.shift();
        total += current.val;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return total;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(binaryTreeSumRecursive(a));
console.log(binaryTreeSum(a));