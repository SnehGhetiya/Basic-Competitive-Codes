class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const minimum = (a, b) => {
//     if (a < b) return a;
//     return b;
// }

// const binaryTreeMin = (root) => {
//     if (root === null) return 0;
//     let queue = [root];
//     let min = Number.MAX_VALUE;
//     while (queue.length > 0) {
//         let current = queue.pop();
//         min = minimum(min, current.val);
//         if (current.left) {
//             queue.push(current.left);
//             min = minimum(min, current.left.val);
//         }
//         if (current.right) {
//             queue.push(current.right);
//             min = minimum(min, current.right.val);
//         }
//     }
//     return min;
// }

const minimumFromThree = (a, b, c) => {
    return Math.min(a, b, c);
}

const binaryTreeMinRecursive = (root) => {
    if (root === null) return Infinity;
    const leftMin = binaryTreeMinRecursive(root.left);
    const rightMin = binaryTreeMinRecursive(root.right);
    return minimumFromThree(root.val, leftMin, rightMin);
}

const a = new Node(1);
const b = new Node(-2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(binaryTreeMin(a));
console.log(binaryTreeMinRecursive(a));