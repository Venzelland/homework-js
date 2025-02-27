let a = 5;

console.log(a); // 5

setTimeout(() => {
    console.log(a); // 15
    a = 10;
}, 0);

Promise.resolve().then(() => {
    console.log(a); // 5
    a = 15;
});

console.log(a); // 5

// Порядок вывода: 5, 5, 5, 15