const fs = require('fs').promises;

const parseLines = async () => {
    const data = await fs.readFile('./input', { encoding: 'utf-8' });
    return data.split('\n');
}

const twoSum = async () => {
    const lines = await parseLines();
    const arr = lines.map(Number);
    for (let i = 0; i < arr.length; i++) {
        let difference = 2020 - arr[i];
        if (arr.includes(difference)) {
            return difference * arr[i];
        }
    }
}

twoSum().then(console.log);