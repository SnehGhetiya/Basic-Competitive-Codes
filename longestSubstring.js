const longestSubstringWithoutRC = (string) => {
    let stack = [];
    let res = [];
    for (let i = 0; i < string.length; i++) {
        if (stack.includes(string.charAt(i))) {
            stack = [];
        }
        else {
            stack.push(string.charAt(i));
        }
    }
    return stack;
}

console.log(longestSubstringWithoutRC('abcabcbb'));