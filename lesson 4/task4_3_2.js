const obj = {
    child: {
        i: 10,
        b: () => console.log(this.i, this), // стрелочная функция, this ссылается на глобальный объект (или undefined в strict mode)
        c() {
            console.log(this.i, this); // обычная функция, this ссылается на объект child
        },
    }
};

obj.child.b(); // undefined, Window (или undefined в strict mode)
obj.child.c(); // 10, { i: 10, b: [Function: b], c: [Function: c] }