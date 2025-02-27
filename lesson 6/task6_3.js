setTimeout(() => console.log("a")); // a

Promise.resolve()
    .then((first) => {
        console.log("first:", first); // first: undefined
        return "b";
    })
    .then(() => {
        return Promise.resolve().then((second) => {
            console.log("second: ", second); // second: undefined
            return "c";
        });
    })
    .then((third) => console.log("third:", third)); // third: c

console.log("d"); // d

// Порядок вывода: d, first: undefined, second: undefined, third: c, a