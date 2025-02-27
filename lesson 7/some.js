Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.mySome(num => num % 2 === 0);
console.log(hasEven); // true