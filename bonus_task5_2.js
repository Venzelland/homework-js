function findPairWithSum(arr, total) {
    const seen = new Set();

    for (let num of arr) {
        const complement = total - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }

    return null; // Если пара не найдена
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

console.log(findPairWithSum(arr, total)); // [4, 9]

// можем оптимизировать без дополнительной памяти, но если массив отсортированный(в принципе как у нас и есть)

function findPair(arr, total) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === total) {
            return [arr[left], arr[right]];
        } else if (sum < total) {
            left++; // увеличиваем левый указатель
        } else {
            right--; // уменьшаем правый указатель
        }
    }

    return null; // если пара не найдена
}

console.log(findPair(arr, total)); // [4, 9]




