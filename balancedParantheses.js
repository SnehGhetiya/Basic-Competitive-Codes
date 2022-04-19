const balancedParantheses = (str) => {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        }
        else if (str[i] === '{') {
            stack.push(str[i]);
        }
        else if (str[i] === '[') {
            stack.push(str[i]);
        }
        else if (str[i] === ')') {
            stack.pop();
        }
        else if (str[i] === '}') {
            stack.pop();
        }
        else if (str[i] === ']') {
            stack.pop();
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}

console.log(balancedParantheses('[{()}[]]'));