function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];

// Сумма всех элементов массива
const sum = myReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); // 15

// Произведение всех элементов массива
const product = myReduce(numbers, (acc, num) => acc * num, 1);
console.log(product); // 120

// Конкатенация всех элементов массива в строку
const words = ['Hello', ' ', 'World', '!'];
const sentence = myReduce(words, (acc, word) => acc + word, '');
console.log(sentence); // "Hello World!"