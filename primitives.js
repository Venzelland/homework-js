// ==================== String ====================
let str1 = "Hello";

let str2 = new String("Hello").valueOf();
let str3 = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"
let str4 = eval("'Hello'");
let str5 = JSON.parse('"Hello"');


// ==================== Number ====================
let num1 = 42;
let num2 = Number("10");

let num3 = new Number(42).valueOf();
let num4 = parseFloat("3.14") + 1; // 4.14
let num5 = eval("42");
let num6 = JSON.parse("42");


// ==================== Boolean ====================
let bool1 = true;
let bool2 = false;

let bool3 = new Boolean(true).valueOf();
let bool4 = !!1; // true
let bool5 = eval("true");
let bool6 = JSON.parse("true");


// ==================== Null ====================
let n1 = null;

let n2 = eval("null");
let n3 = JSON.parse("null");


// ==================== Undefined ====================
let u1;
let u2 = undefined;

let u3 = (function() {})(); // Функция без return вернёт undefined
let u4 = void 0; // Явное указание undefined
let u5 = eval("undefined");
let u6 = JSON.parse('{"key": null}').key; // Вернёт undefined, если ключ отсутствует


// ==================== Symbol ====================
let sym1 = Symbol("id");

let sym2 = Object(Symbol("id")); // Обёрнутый Symbol (не примитив)
let sym3 = Symbol.for("global_id"); // Глобальный реестр символов
let sym4 = eval("Symbol('id')");

// ==================== BigInt ====================
let bigInt1 = 123456789012345678901234567890n;

let bigInt2 = BigInt("123456789012345678901234567890");
let bigInt3 = BigInt(10) ** BigInt(20); 
let bigInt4 = eval("123456789012345678901234567890n");

//PR?
