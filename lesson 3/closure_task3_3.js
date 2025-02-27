var globalVar = 'global';
var outerVar = 'outer';

function outerFunc(outerParam) {
    function innerFunc(innerParam) {
        console.log(globalVar, outerParam, innerParam);
    }
    return innerFunc;
}

const x = outerFunc(outerVar);
outerVar = 'outer-2';
globalVar = 'guess';
x('inner');

// Шаги выполнения:
// Инициализация переменных:
//
// globalVar = 'global'.
//
// outerVar = 'outer'.
//
// Вызов outerFunc(outerVar):
//
// В функцию outerFunc передается значение outerVar, то есть 'outer'.
//
// Параметр outerParam функции outerFunc получает значение 'outer'.
//
// Внутри outerFunc создается функция innerFunc, которая захватывает (замыкает) переменные:
//
// globalVar (глобальная переменная).
//
// outerParam (параметр внешней функции).
//
// Возврат innerFunc:
//
// Функция outerFunc возвращает innerFunc, и она сохраняется в переменной x.
//
// Изменение переменных:
//
// outerVar изменяется на 'outer-2'. Это не влияет на outerParam, так как outerParam уже был передан в outerFunc и зафиксирован в замыкании.
//
// globalVar изменяется на 'guess'. Это глобальная переменная, и её новое значение будет использоваться при вызове innerFunc.
//
// Вызов x('inner'):
//
// Переменная x содержит функцию innerFunc.
//
// В innerFunc передается аргумент 'inner', который становится значением innerParam.
//
// Внутри innerFunc выполняется console.log(globalVar, outerParam, innerParam):
//
// globalVar = 'guess' (текущее значение глобальной переменной).
//
// outerParam = 'outer' (значение, захваченное замыканием).
//
// innerParam = 'inner' (аргумент, переданный в innerFunc).
//
// Результат:
// javascript
// Copy
// console.log(globalVar, outerParam, innerParam); // guess,outer,inner
// Почему так происходит?
// Замыкание:
//
// Функция innerFunc запоминает (замыкает) значения переменных, которые были доступны на момент её создания.
//
// В данном случае:
//
// outerParam = 'outer' (значение, переданное в outerFunc).
//
// globalVar = 'global' (но она изменяется позже, и новое значение используется).
//
// Глобальные переменные:
//
// globalVar — глобальная переменная, её значение может изменяться, и функция будет использовать последнее значение.
//
// Локальные параметры:
//
// outerParam — локальный параметр функции outerFunc, его значение фиксируется в замыкании и не изменяется.
//
// Итог:
// javascript
// Copy
// x('inner'); // guess outer inner