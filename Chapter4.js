// Массивы - в js тип данных, предназначенный для хранения послежовательностей чисел. Записывается, как список значений в квадратных скобках через запятую:

var arr1 = [1, 2, 3, 4, 5, 6, 8]

console.log(arr1[1]);

console.log(arr1[3 - 1]);

//Свойства. Почти у всех переменных в js есть свойства, кроме null и und
// два основных способа получить доступ к свойству - точка и квадратные скобки value.x и value[x]
// Разница в интерпретации x. При использовании точки - запись после нее должна быть существующей переменной и таким образом вызывает свойство по имени
// При использовании скобок - выражение в скобках вычисляется для получения свойства и дальнейшего его вызова
//value.x вызывает свойство под именем “x”, а value[x] вычисляет выражение x и использует результат в качестве имени свойства.

//Элементы массива хранятся в свойствах. Так как имена этих свойств – числа (недопустимое имя свойства для ссылки через точку), и нам часто приходится получать их имена из значений переменных, нужно использовать квадратные скобки для доступа к ним.


//Методы. Методы - это свойства, которые ссылаются на функции

let string = "gggghhhhhh"
console.log(string.toUpperCase()); //У каждой строки есть свойство toUpperCase, другими словами - это метод строки
console.log(typeof string.toUpperCase);


//некоторые стандартные методы массивов:

var arr2 = [];

//Метод push используется для добавления элементов в конец массива
arr2.push("element1, ");
arr2.push("element2, ");
arr2.push("element3, ");

console.log(arr2);

//Метод pop делает обратное - удаляет последний элемент из массива и возвращает его

console.log(arr2.pop());
console.log(arr2);
//Соответствующие методы для начала массива называются unshift и shift
// Метод join позволяет свести элементы массива в одну строку, принимает в качестве аргумента строку, которая будет вставлена между элементами: 

console.log(arr2.join("!!!!!!!"));
console.log(arr2.join());
/*_____________________________________________________________________________*/
// ОБЪЕКТЫ
//Переменные типа object - коллекции произвольных свойств, которые мы можем добавлять/удалять при необходимости
//Объект может задаваться с использованием фигурных скобок, с скобках может задаваться список свойств через запятую, каждое свойство записывается как имя свойства, двоеточие и выражение, являющееся значением свойства

var day1 = {
    squirrel: false, 
    events: ["работа", "тронул дерево", "пицца", "пробежка", "телевизор"]

}

console.log(day1);
console.log(day1.squirrel);
console.log(day1.events[1]);
console.log(day1.wolf);

//Свойству можно назначать значение через оператор =. Если у него ранее было значение, оно будет заменено. Если свойство отсутствовало, оно будет создано.
day1.wolf = false;
day1.squirrel = true;
console.log(day1);
console.log("wolf" in day1);
// унарный оператор, применяемый к выражению доступа к свойству delete удаляет свойства: 
delete day1.wolf;
console.log(day1);

//бинарный оператор in принимает строку и имя объекта и возвращает булевское значение, показывающее содержит ли объект указанное свойсво: 

console.log("wolf" in day1);
console.log("length" in arr2);

//массив объектов: 

var journal = [
    {events: ["работа", "тронул дерево", "пицца", "пробежка", "телевизор"],
    squirrel: false},
   {events: ["работа", "мороженое", "цветная капуста", "лазанья", "тронул дерево", "почистил зубы"],
    squirrel: false},
   {events: ["выходной", "велик", "перерыв", "арахис", "пивасик"],
    squirrel: true},
   /* и так далее... */

]

console.log(journal[0].events[3]);

//программа измерения корреляции булевских переменных в зависимости от событий: 

 var journal_total = [];

 function addEntry(events, boolean_){
     journal_total.push({
         events: events,
         squirrel: boolean_
     });
}

addEntry(["Событие1", "Событие1","Событие2","Событие3", "Событие1",  "Событие1",  "Событие1", "Событие1", "Событие1", "Событие1", "Событие1", "Событие1", "Событие1", "Событие1"], true)

//итог: 
var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];

//рассчитываем коэффициент корреляции: table - массив [76, 9, 4, 1], где [0] - количество записей без влияющей ситуации при ключевом событии false [1] - количество записей, где имела место быть конкретная ситуация, а ключевое событие было false, [2] - записи, без влияющей ситуации, где ключевое событие true, [3] - записи, с влияющей ситуацией где ключевое событие true


function PHI(table){
    return  (table[3]*table[0]-table[2]*table[1])/

    Math.sqrt((table[2]+table[3])*
    (table[0]+table[1])*
    (table[1]+table[3])*
    (table[0]+table[2]));
}
// метод indexOf("string") для массива принимает аргумент и возвращает его индекс в массиве:
// У метода indexOf есть родственник по имени lastIndexOf, который начинает поиск элемента в массиве с конца
// У методов IndexOf и lastIndexOF есть необязательный аргумент, который задает первоначальную позицию поиска
function HasEvent(event, entry){
    return entry.events.indexOf(event) != -1;

}

function TableFor(event, journal){
    var table = [0, 0, 0, 0];

    for (let  i = 0;  i < journal.length;  i++) {
        var entry = journal[i], index = 0;
        if (HasEvent(event, entry)) index+=1;
        if (entry.squirrel) index+=2;
        table[index]+= 1;
        
    }
    return table;
}

console.log(PHI(TableFor("pizza", JOURNAL)));
console.log(PHI(TableFor("lasagna", JOURNAL)));
console.log(PHI(TableFor("peanuts", JOURNAL)));
// далее нужно подсчитать корреляции для каждого из событий и выявить закономерности. Вопрос - как хранить полученные корреляции? 
// Можно использовать свойства объектов с именами событий (использовать объекты как карты). 

var map = {};

function storePhi(event, phi){
    map[event] = phi;
}

storePhi("pizza", 0.06859943405700354);
storePhi("lasagna", 0.08084520834544433);
storePhi("peanuts", 0.59026798116852);

console.log("pizza" in map);
console.log(map["pizza"]);
console.log(map.lasagna);

//JavaScript предлагает конструкцию цикла специально для обхода всех свойств объекта. Она похожа на цикл for, но использует команду in.

for (var event in map)
{
    console.log("Корреляция для '" + event + "' получается " + map[event])
}

// Итоговый анализ: обрабатывам по очереди каждый тип события по очереди

function gatherCorrelation(journal){
    var phis = {};
    for (var i=0; i<journal.length; i++){
        var events = journal[i].events;
        for (var j = 0; j < events.length; j++) {
            var event = events[j];

            if (!(event in phis)) 
            phis[event] = PHI(TableFor(event, journal)) 
            
        }
    }
    return phis;

}

var correlations = gatherCorrelation(JOURNAL);

console.log(correlations.pizza);

// Отфильтруем корреляции, оставив события, с phi меньше -0.1 и больше 0.1:
for  (var entry in correlations){
    var correlation = correlations[entry];
    if (correlation > 0.1 || correlation < -0.1){
        console.log(entry + ":" + correlation);
    }
}

// еще один стандартный метод для массивов: slice, который принимает номера начального (start) и конечного (end) элементов, и возвращаеь массив, состоящий из элементов, попадающих в данный промежуток
//Включая тот, что находится по индексу start, но исключая тот, что по индексу end.
//Когда индекс end не задан, slice выбирает все элементы после индекса start. У строк есть схожий метод, который работает так же.

console.log([0,1,2,3,4,5,6,7,8,9,10,11,12].slice(4,8));
console.log([0,1,2,3,4,5,6,7,8,9,10,11,12].slice(4));

//Метод concat используется для склейки массивов как + для склейки строк:
// Задача: функция, принимающая массив и индекс и удаляет из массива элемент по заданному индексу

function Task2(array, index) {
    return array.slice(0, index).concat(array.slice(index+1));
}

var res = Task2(["a", "s", "d", "f", "g", "h", "j", "k", "l", "z"], 2);

console.log(res);

// для строк также есть набор стандартных методов в их числе и IndexOf, slice. Только IndexOf у строк может принимать несколько символов, а у массива это работает только с одним элементом

// метод trim удаляет пробелы/ переводы строк и им подобные символы с обоих концов строки: 

var stroka = " лааадно, и так сойдеет     \n";
console.log(stroka);
console.log(stroka.trim());
stroka = stroka.trim();
//доступ к отдельным символам строчки можно получить через метод charAt(i), а также через квадратные скобки как в массивах: 

console.log(stroka.charAt(9));
console.log(stroka[5]);

// когда вызывается функция, к исполняемому телу функции добавляется особая переменная под названием arguments. Она указывает на объект, содержащий все аргументы, переданные функции. в JS в функцию можно передавать как больше объявленных переменных, так и меньше
//  arguments.lenght - покажет количество переданных переменных

function ArgumentCounter() 
{
    console.log("Ты дал мне " + arguments.length + " переменных");
}

ArgumentCounter(3, 5, 6, 7, 8, 8);

// функции обычно проходят циклом по по свойствам объекта arguments. Это можно использовать для написания удобных интерфейсов. Например, функцию addEntry можно переписать: 

function addEntry1(squirrel){
var entry = {events: [], squirrel: squirrel};
for (var i=1; i<arguments.length; i++)
    entry.events.push(arguments[i]);
    journal_total.push(entry);

}
//Эта версия читает первый аргумент как обычно, а по остальным проходит в цикле (начиная с индекса 1, пропуская первый аргумент) и собирает их в массив.
addEntry1(true, "Событие12", "Событие12","Событие22","Событие32", "Событие12",  "Событие12",  "Событие1", "Событие1", "Событие1", "Событие1", "Событие1", "Событие1", "Событие1", "Событие1");
console.log(journal_total);

function gatherCorrelationNew(journal){
    var phis = {};
    journal.forEach(function(entry){
        entry.events.forEach(function(event){
        if (!(event in phis))
        phis[event] = PHI(TableFor(event, journal));
        });
    });
    return phis;
    }

    console.log(gatherCorrelationNew(JOURNAL));

    //так как массив уже передан в качестве переменной, над которой мы работаем, forEach принимает только один аргумент – функцию, которую нужно выполнить для каждого элемента.