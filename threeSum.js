const fs = require('fs').promises;

const parseLines = async () => {
    const data = await fs.readFile('./input', { encoding: 'utf-8' });
    return data.split('\n');
}

const threeSum = async () => {
    const lines = await parseLines();
    const arr = lines.map(Number);
    const pairSum = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const num1 = arr[i];
            const num2 = arr[j];
            const sum = arr[i] + arr[j];
            pairSum[sum] = [num1, num2];
        }
    }

    for (let num of arr) {
        const diff = 2020 - num;
        if (diff in pairSum) {
            const [num1, num2] = pairSum[diff];
            return num * num1 * num2;
        }
    }
}

threeSum().then(console.log);