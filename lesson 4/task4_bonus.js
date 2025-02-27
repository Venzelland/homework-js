Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...innerArgs) {
        return fn.apply(context, [...args, ...innerArgs]);
    };
};

// Пример использования
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Alice" };
const boundGreet = greet.myBind(person, "Hello");
boundGreet(); // Hello, Alice