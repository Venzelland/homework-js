function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];

// Увеличиваем каждый элемент массива на 1
const incrementedNumbers = myMap(numbers, num => num + 1);
console.log(incrementedNumbers); // [2, 3, 4, 5, 6]

// Преобразуем числа в строки
const stringNumbers = myMap(numbers, num => num.toString());
console.log(stringNumbers); // ['1', '2', '3', '4', '5']

// Возводим каждый элемент массива в квадрат
const squaredNumbers = myMap(numbers, num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]