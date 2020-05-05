const ANCESTRY_FILE = require("./ancestry.js");




// Обход массива:
var array = [1, 2, 3, 4]

for (var i = 0; i < array.length; i++)
{
var current = array[i];
console.log(current);

}

//Обход массива с помощью функции:
function FArray (array) {
    for (var i = 0; i<array.length; i++)
    console.log(array[i]);
}

FArray(array);

// Функцию можно передать в качестве аргумента в другую функцию:

function ForEachItem (array, action) {
    for (var i = 0; i<array.length; i++)
    {
        action(array[i])
    }
}

ForEachItem(["Тили", "Мили", "Трямдия"], console.log);

// Можно не передавать заранее определенную функцию, а создавать ее на месте:
var sum = 0;
ForEachItem (array, function(number){
    sum+= number;
});
console.log(sum);

// похоже на классический цикл for для массива, но записанный в блоке. forEach можно даже не писать - это стандартный метод массива: 

// функцию gatherCorrelation из chapter4 можно переписать: 
//  так как массив уже передан в качестве переменной, над которой мы работаем, forEach принимает только один аргумент – функцию, которую нужно выполнить для каждого элемента.
function gatherCorrelationNew(journal){
var phis = {};
journal.forEach(function(entry){
    entry.events.forEach(function(event){
    if (!(event in phis))
    phis[event] = phi(tableFor(event, journal));
    });
});

}

// Функции, принимающие в качестве аргумента другие функции или которые их возвражают называются функциями высшего порядка (функции - просто переменные....)
//Функции высшего порядка позволяют абстрогировать действия, а не только значения
//можно сделать функцию, создающую новые функции: 
function greaterThan(n){
    return function(m){return m>n;};
}

var newFunction = greaterThan(10);

console.log(greaterThan(10)(2));
console.log(newFunction(33));

// можно сделать функцию, меняющую другие функции: 

function noisy(f){
    return function(arg){
        console.log("Calling with" + arg);
        var v = f(arg);
        console.log("Calling with" + arg + " - got "+ v);
        return v;
    };
};

noisy(Boolean)(0);
//данная функция не совсем удобна, т.к если f принимает больше 1 параметра, то она получит только первый
// у функций в JS есть метод apply, которому передается массив из аргументов, а он вызывает функцию с этимим аргументами: 

function transparentWrapping(f) {
    return function(){
        return f.apply(null, arguments);
    };
} // возвращаемая данной функцией функция передает в f все полученные ею аргументы при помощи передачи ее собственных аргументов (через arguments) в метод apply 

// можно делать функции, создающие новые типы управления потоком программы:

function unless(test, then){
    if (!test) then();
}

function repeat(times, body){
    for (var i = 0; i<times; i++)
    body(i);
}

repeat(5, function(n){
    unless(n%2, function(){
        console.log("is even", n);
    });
});


//формат JSON (JavaScript Object Notation) имеет вид: 
[
    {"name": "Emma de Milliano", "sex": "f",
     "born": 1876, "died": 1956,
     "father": "Petrus de Milliano",
     "mother": "Sophia van Damme"},
    {"name": "Carolus Haverbeke", "sex": "m",
     "born": 1832, "died": 1905,
     "father": "Carel Haverbeke",
     "mother": "Maria van Brussel"},
    //… и так далее
  ]

  // JSON похож на JS по записи массивов и объектов, с некоторыми ограничениями: 
  // Имена свойств должны быть заключены в двойные кавычки, а также допускаются только простые значения (без переменных, вызовов функций, вычислений)

  // Функции в JS преобразования данных в этот формат и обратно: JSON.stringify и JSON.parse
  // JSON.stringify принимает значение и возвращает строчку с JSON:

  let string = JSON.stringify({name: "Karl", born: 1927});
  console.log(string);

  // JSON.parse принимает строчку JSON и может возвращать значения:
  console.log(JSON.parse(string));
  console.log(JSON.parse(string).name);

  var ancestry = JSON.parse(ANCESTRY_FILE);

  console.log(ancestry.length);

//функция, отфильтровывающая элементы массива, которые не проходят проверку:

function filterLog(array, test) {
    var passed = [];
    for (var i=0; i<array.length; i++){
    if (test(array[i]))
    passed.push(array[i])
    
    }
    return passed;
}

console.log(filterLog(ancestry, function(person){
    return person.born > 1900 && person.born < 1925;
}));
//функция filter не удаляет элементы из существующего массива, а строит новый, содержащий только прошедшие проверку элементы. Это !чистая функция, потому что она не портит переданный ей массив.

//filter – это один из стандартных методов массива

console.log(ancestry.filter(function(person){
    return person.father == "Carel Haverbeke";
}));

//метод map преобразовывает массив, применяя функцию ко всем его элементам и строя новый массив из возвращаемых значений

function map(array, transform) {
    var mapped = [];
    for (var i=0; i < array.length; i++){
        mapped.push(transform(array[i]));
        
    }
    return mapped;
}

var overNinety = ancestry.filter(function(person){
    return person.died - person.born > 90;
});

console.log(map(overNinety, function(person){
    return person.name;
}));
//map также является стандартным методом у массивов.

//
function reduceLog(array, combine, start) {
    var current = start;

    for (var i=0; i < array.length; i++)
    current = combine(current, array[i]);
    return current;
}
//Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
console.log(reduceLog([1,2,3,4], function(a, b){
    return a + b;
}, 0));

//

console.log(ancestry.reduce(function(min, cur){
    if (cur.born < min.born) return cur;
    else return min;
}));

// комбинирование функций: 

function average(array) {
    function plus(a, b) {return a + b;}
    return array.reduce(plus) / array.length;
}

function age(p) {return p.died - p.born;}
function male(p) {return p.sex == "m"; }
function female(p) {return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));

console.log(average(ancestry.filter(female).map(age)));

var byName = {};

ancestry.forEach(function(person){
    byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);

//Метод bind, который есть у всех функций, создаёт новую функцию, которая вызовет оригинальную, но с некоторыми фиксированными аргументами^

var theSet = ["Carel Haverbeke", "Maria van Brussel",
"Donald Duck"];

function isInSet(set, person){
    return set.indexOf(person.name) > -1;

}

console.log(ancestry.filter(function(person){
    return isInSet(theSet, person);
    }));

    console.log(ancestry.filter(isInSet.bind(null, theSet)));

    // Вызов bind возвращает функцию, которая вызовет isInSet с первым аргументом theSet, и последующими аргументами такими же, какие были переданы в bind.

    

