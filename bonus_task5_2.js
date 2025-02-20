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