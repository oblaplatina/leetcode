function mySqrt(x) {
    let i = 0;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
}

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(1470));
console.log(mySqrt(0));
console.log(mySqrt(1));