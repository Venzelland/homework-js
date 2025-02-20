function createIncrement() {
    let value = 0;

    function increment() {
        value += 1;
        console.log(value);
    }

    const message = `Current value is ${value}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();

increment(); // 1
increment(); // 2
increment(); // 3

log(); // "Current value is 0"

// Почему log() выводит 0, а не 3?
//
// Переменная message создается один раз при вызове createIncrement(), и в этот момент value равно 0.
//
// message не обновляется автоматически при изменении value, поэтому log() всегда выводит исходное значение.