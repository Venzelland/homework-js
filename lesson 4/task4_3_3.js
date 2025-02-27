function foo() {
    const x = 10;
    return {
        x: 20,
        bar: () => {
            console.log(this.x); // стрелочная функция, this зависит от контекста вызова foo
        },
        baz: function () {
            console.log(this.x); // обычная функция, this зависит от контекста вызова
        }
    };
}

const obj1 = foo();
obj1.bar(); // undefined (this ссылается на глобальный объект, так как foo вызвана без контекста)
obj1.baz(); // 20 (this ссылается на объект, возвращённый foo)

const obj2 = foo.call({ x: 30 }); // foo вызвана с контекстом { x: 30 }

let y = obj2.bar;
let z = obj2.baz;
y();   // 30 (стрелочная функция сохраняет контекст вызова foo)
z();   // undefined (this ссылается на глобальный объект, так как baz вызвана без контекста)

obj2.bar();    // 30 (стрелочная функция сохраняет контекст вызова foo)
obj2.baz();    // 20 (this ссылается на объект, возвращённый foo)