function isPalindrome(x) {
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(-121)); 
console.log(isPalindrome(10));
console.log(isPalindrome(22222));