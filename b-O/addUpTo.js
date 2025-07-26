// Suppose we want to write a function that calculates then sum of all numbers from 1 up to ( and including ) some number n.

//  Example : addUpTo(4) = 1 + 2 + 3 + 4 = 10
function addUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(addUpTo(4));

// Using formula
function addUpTo(n) {
    return n * (n + 1) / 2;
}

// Using recursion
function addUpTo(n) {
    if (n === 1) return 1;
    return n + addUpTo(n - 1);
}

console.log(addUpTo(4));
