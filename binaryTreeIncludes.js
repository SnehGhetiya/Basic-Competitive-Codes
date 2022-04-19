class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const binaryTreeIncludes = (root, target) => {
//     const queue = [root];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (current.val === target) return true;
//         if (current.left) queue.push(current.left);
//         if (current.right) queue.push(current.right);
//     }
//     return false;
// }

const binaryTreeIncludesRecursive = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;
    return binaryTreeIncludesRecursive(root.left, target) || binaryTreeIncludesRecursive(root.right, target);
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(breadthFirstValues(a));
// console.log(binaryTreeIncludes(a, 'e'));
console.log(binaryTreeIncludesRecursive(a, 'e'));