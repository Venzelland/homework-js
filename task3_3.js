function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

const makeCounter = () => {
    let count = 0;
    return {
        increment() {
            return count++;
        }
    };
};

class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        return this.count++;
    }
}

const makeCounter = () => new Counter();