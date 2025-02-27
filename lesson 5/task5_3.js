class A {
    constructor() {

    }

    arrFunc = () => {
        console.log('wtf’, this === i)
    }
}

var i = new A();
i.arrFunc(); // true

console.log(i.hasOwnProperty('arrFunc')); // true
// поясните ответ:
// Стрелочная функция arrFunc:
// Стрелочные функции не имеют своего собственного this. В данном случае this внутри arrFunc
// ссылается на экземпляр класса A, то есть на объект i. Поэтому this === i возвращает true.
//
// hasOwnProperty('arrFunc'):
// Метод arrFunc добавлен как свойство экземпляра класса (а не в прототип),
// поэтому i.hasOwnProperty('arrFunc') возвращает true.