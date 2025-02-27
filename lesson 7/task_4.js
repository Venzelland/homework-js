function F() {
    //?
}

const x = {}

F.prototype =  x;//что тут происходит? зачем?

const a = new F();

console.log(a.__proto__ === x) //? true
