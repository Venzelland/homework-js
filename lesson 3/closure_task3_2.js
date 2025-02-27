let group = getGroup();

group[0](); // 10
group[5](); // 10

function getGroup() {
    let students = [];
    let i = 0;
    while (i < 10) {
        students[i] = function() {
            console.log(i);
        };
        i++;
    }
    return students;
}

// Почему group[0]() и group[5]() выводят 10?
//
// Все функции в массиве students ссылаются на одну и ту же переменную i.
//
// К моменту вызова любой из этих функций цикл уже завершился, и i равно 10.
//
// Как исправить?
// Используем IIFE (Immediately Invoked Function Expression), чтобы создать новую область видимости для каждой итерации:
//
// function getGroup() {
//     let students = [];
//     for (let i = 0; i < 10; i++) {
//         students[i] = (function(i) {
//             return function() {
//                 console.log(i);
//             };
//         })(i);
//     }
//     return students;
// }
//
// let group = getGroup();
// group[0](); // 0
// group[5](); // 5