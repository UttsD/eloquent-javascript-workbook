/** Методы - свойства, содержащие функции
 * Пример:
 */

 var rabbit = {};
 rabbit.speak = function(line) {
     console.log("Кролик говорит '" + line + "'")
 }

 rabbit.speak("Я живой");

 /*
 Метод обычно что-то должен делать с объектом, через который он был вызван. 
 Когда функцию вызывают как свойство объекта (в виде метода object.method()) - 
 в ее теле будет специальная переменная this, указывающая на вызвавший ее объект:
 */

 function speak2(line) {
    console.log("A " + this.type + " Кролик говорит '" + line + "'")
 }

 var whiteRabbit = {type: "белый", speak: speak2};
 var fatRabbit = {type: "толстый", speak: speak2};

 fatRabbit.speak("Ой ой ой")
 rabbit.speak("Я живой");
 speak2("Шо це")

/* 
Методы bind и apply принимают первый аргумент, который можно использовать для эмуляции вызова методы. Этот первый аргумент и определяет значение this
Есть похожий на apply метод call, который только принимает аргументы как обычно, а не в виде массива:
*/

speak2.apply(fatRabbit, ["Ураа"]);

speak2.call({type: "старый"}, "О господи");

/*
В дополнение к набору свойств у объектов еще также есть прототип. Прототип - это еще один объект, который используется как запасной источник свойств
Когда объект получает запрос на свойство, которого у него нет, это свойство ищется у прототипа, потом у прототипа прототипа и.т.д.

а корневой прототип всех объектов - Object.prototype

*/

console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype) == Object.prototype);

/* Для создания объектов с заданным прототипом можно использовать Object.create(prototype)*/

var protoRabbit = {
    speak: function(line) {
        console.log("A " + this.type + " Кролик говорит '" + line + "'")
     }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Убийственный";
killerRabbit.speak("Хрясь");

/*Конкретный объект - может содержать свойства, применимые только к нему (например type), а также наследует свойства своего прототипа*/

/*КОНТСТРУКТОРЫ - более удобный способ создания объектов
Вызов функции с ключевым словом new в JS приводит к тому, что функция работает как конструктор. Конструктор создает новый объект и возвращает его, если только явно не задано возвращение другого объекта

 При этом свежесозданный объект доступен изнутри конструктора через переменную this.

 Говорят, что объект, созданный при помощи new, является экземпляром конструктора.

 Имена конструкторов принято начинать с заглавной буквы, чтобы отличать их от других функций.
*/


function Rabbit(type) {
    this.type = type;
}
//чтобы добавить кроликам, созданным конструктором Rabbit, метод speak, мы просто можем сделать так:
Rabbit.prototype.speak3 = function(line) {
    console.log("A " + this.type + " Кролик говорит '" + line + "'")
 }

var killerRabbit = new Rabbit("убийственный");
var blackRabbit = new Rabbit("черный");
console.log(blackRabbit.type);

blackRabbit.speak3("Всем капец");
/* прототип конструктора – Function.prototype, поскольку конструкторы – это функции. Его свойство prototype будет прототипом экземпляров, созданных им, но не его прототипом.*/
/*Когда к объекту добавляется свойство - оно добавляется самому объекту, независимо есть оно в прототипе или нет. Если в прототипе уже есть такое свойство, то оно больше не ВЛИЯЕТ НА ЭТОТ ОБЪЕКТ, сам прототип не меняется
это - перегрузка унаследованных свойств*/

Rabbit.prototype.teeth = "мелкие";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "длинные, острые и окровавленные"
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);

// Прототип помогает в любое время добавлять новые свойства и методы всем объектам, которые основаны на нём
//что JavaScript различает счётные и несчётные свойства (которые отображаются в циклах for/in и нет)

// Все свойства, которые мы задаем назначая им значение - счётные. 
// Все стандартные свойства Object.prototype - несчетные.

// Можно объявлять свои несчетные свойства через функцию Object.defineProperty, которая позволяет задать тип создаваемого свойства

//Можно создавать объекты без прототипа. Через Object.create, передав в качестве прототипа null

var map = Object.create(null);
var map1 = Object.create(Object.prototype);
map["property"] = "значение";
map1["property"] = 99;
console.log("toString" in map);
console.log("toString" in map1);
console.log("property" in map);
console.log("property" in map1);

//ПОЛИМОРФИЗМ. Пример: 

//Программа, получает массив массивов из ячеек таблицы, и строит отформатированную таблицу, с выравненными колонками и рядами

function rowHeights(rows) {
    return rows.map(function(row){
        return row.reduce(function(max, cell){
            
        })
    })
}

