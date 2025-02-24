console.log("1"); // 1

setTimeout(() => console.log("2"), 1); // 2

let promise = new Promise((resolve) => {
    console.log("3"); // 3
    resolve();
});

promise.then(() => console.log("4")); // 4
setTimeout(() => console.log("5"), 1); // 5

console.log("6"); // 6

// Порядок вывода: 1, 3, 6, 4, 2, 5