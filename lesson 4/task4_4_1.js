const numbers = [1, 2, 3, 4, 5];

// Способ 1: reduce
const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);

// Способ 2: forEach
let sum2 = 0;
numbers.forEach(num => sum2 += num);

// Способ 3: for...of
let sum3 = 0;
for (const num of numbers) {
    sum3 += num;
}

console.log(sum1, sum2, sum3); // 15 15 15



const strings = ["Hello", "World", "!"];

// Способ 1: join
const result1 = strings.join(" ");

// Способ 2: reduce
const result2 = strings.reduce((acc, curr) => acc + " " + curr);

console.log(result1, result2); // Hello World ! Hello World !



const numbers = [1, 2, 3, 4, 5];

// Способ 1: Math.max и Math.min
const max1 = Math.max(...numbers);
const min1 = Math.min(...numbers);

// Способ 2: reduce
const max2 = numbers.reduce((acc, curr) => Math.max(acc, curr));
const min2 = numbers.reduce((acc, curr) => Math.min(acc, curr));

console.log(max1, min1, max2, min2); // 5 1 5 1