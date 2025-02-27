function Hamster() {
    this.food = []
}

// Hamster.prototype.food = [ ]; // пустой "живот" // проблема в общем "животе"

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length); // 2
console.log(lazy.food.length);   // 2 (!??) // должно быть 0 //