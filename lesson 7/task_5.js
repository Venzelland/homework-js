const user = {
    name: 'Bob',
    funcFunc() {
        return function() {
            console.log(this);
        }
    },
    funcArrow() {
        return () => {
            console.log(this);
        }
    },
    arrowFunc: () => {
        return function() {
            console.log(this);
        }
    },
    arrowArrow: () => {
        return () => {
            console.log(this);
        }
    },
};

user.funcFunc()(); // window/global (в зависимости от среды выполнения)
user.funcArrow()(); // user
user.arrowFunc()(); // window/global
user.arrowArrow()(); // window/global

// funcFunc возвращает обычную функцию, которая теряет контекст this, поэтому this будет указывать на глобальный объект.
//
// funcArrow возвращает стрелочную функцию, которая сохраняет контекст this из родительской функции, поэтому this будет указывать на user.
//
// arrowFunc возвращает обычную функцию, которая теряет контекст this, поэтому this будет указывать на глобальный объект.
//
// arrowArrow возвращает стрелочную функцию, но сама arrowArrow является стрелочной функцией, поэтому this будет указывать на глобальный объект.
