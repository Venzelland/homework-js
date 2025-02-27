class Animal {
    constructor(name) {
        this.name = name;
    }

}
// первый вариант
class RabbitZero extends Animal {
    constructor(name) {
        super(name); //   this.name = name; // this не инициализирован
        this.created = Date.now();
    }
}

let rabbit = new RabbitZero("Белый кролик"); // Error: this is not defined
alert(rabbit.name);

// в чем ошибка? как исправить? Можно делать что угодно.

// второй вариант
class RabbitOne extends Animal {
    static create(name) {
        const instance = new Animal(name); // Создаем экземпляр Animal
        instance.created = Date.now(); // Добавляем свойство created
        return instance;
    }
}

let rabbitOne = RabbitOne.create("Белый кролик");
alert(rabbitOne.name); // "Белый кролик"
alert(rabbitOne.created); // Время создания