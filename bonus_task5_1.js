//  Создать приватное поле в функции-конструкторе, создать геттер и сеттер для него.

function MyClass() {
    // Приватное поле
    let privateField = 0;

    // Геттер
    this.getPrivateField = function() {
        return privateField;
    };

    // Сеттер
    this.setPrivateField = function(value) {
        privateField = value;
    };
}

let obj = new MyClass();
console.log(obj.getPrivateField()); // 0
obj.setPrivateField(42);
console.log(obj.getPrivateField()); // 42