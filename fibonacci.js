const fibonacci = (n) => {
    let res = [0, 1];
    if (n === 0) return res = [0];
    if (n === 1) return res = [0, 1];
    for (let i = 2; i < n; i++) {
        res = [...res, res[i - 1] + res[i - 2]]
    }
    return res;
}

// const fibonacciRecursive = (n) => {
//     if (n === 0) return [0]
//     if (n === 1) return [0, 1]
//     let arr = fibonacciRecursive(n - 1);
//     return [...arr, arr[n - 1] + arr[n - 2]];
// }

console.log(fibonacci(2));
// console.log(fibonacciRecursive(5));