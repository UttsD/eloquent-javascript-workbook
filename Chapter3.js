// Определение функции - обычное определение переменной, где значением, которое получает переменная является функцией

var square = function(x) {
    return x*x;
};

console.log(square(10));

//Важное свойство функций в том, что переменные, созданные внутри функции (включая параметры), локальны внутри этой функции, т.е. переменные будут создаватьсч каждый раз при вызове функции и эти итерации друг на друга не влияют
//Эта локальность переменных применяется только к параметрам и созданным внутри функций переменным. Переменные, заданные снаружи какой бы то ни было функции, называются глобальными, поскольку они видны на протяжении всей программы
// доступ к ним есть и внутри функции только если внутри нее нет переменной с таким же именем:

var x = "outside";

var f1 = function(){
    var x = "inside"; // переменная объявляется, поэтому она локальная и не меняет значение внешней
    
}
f1()
console.log(x);

var f2 = function() {
    x = "inside f2"; // переменная используется без объявления. поэтому функция работает с внешней переменной
};

f2();
console.log(x);

// Функции можно задавать внутри функций, что приводит к нескольким уровням локальности.

var landscape = function() {
    var result = "";
    var flat = function(size) {
        for (var count = 0; count<size; count++)
        result+="_"
    };

    var mountain = function(size) {
        result+="/";
        for (var count = 0; count<size; count++)
        result+="'";

        result+= "\\";
    };

        flat(3);
        mountain(4);
        flat(6);
        mountain(1);
        flat(1);
        return result;

};

console.log(landscape());

//в JavaScript область видимости создают только функции. 

//В версии JavaScript 1.7 появилось ключевое слово let, которое работает как var, но создаёт переменные, локальные для любого данного блока, а не только для функции.
var some_X = 111
{
    var some_X = 10
    console.log(some_X);
}

{
    var some_X = 15
}

console.log(some_X);

var some_Y = 111;

{
    let some_Y = 10;
}

{
    let some_Y = 15;
}

console.log(some_Y);

//Вызов функции можно использовать, как простую переменную – например, использовать их в любых выражениях.
//Возможно хранить вызов функции в новой переменной, передавать её как параметр другой функции, итд. Также переменная, хранящая вызов функции, остаётся обычной переменной и её значение можно поменять

//есть более короткая запись объявления функции вместо var square = function(x) { return x*x;}:

function square(x) {
    return x*x;
}

// !запрещено объявлять функции внутри условного блока или цикла

//функции могут принимать любое количество аргументов. можно создавать функции, имеющие необязательные аргументы

function exp(base, exponent){
    if (exponent == undefined)
    exponent = 2;
    var result = 1;
    for (var i=0; i<exponent; i++)
        result*= base;
        return result;
    
}

console.log(exp(4));
console.log(exp(4,4));


//!ЗАМЫКАНИЯ
// Вопрос - что происходит с локальными переменными, когда функция перестает работать?

function Example(n){ //объявляем функцию, которая создает локальную переменную, а затем возвращает функцию, которая читает эту переменную и возвращает ее
    var localX = n;
    return function(){return localX;};
}

var wrap1 = Example(1);
var wrap2 = Example(2);
console.log(wrap1()); //тут при вызове внутренней функции остается доступ к локальной переменной внешней

console.log(wrap2());

console.log(Example(3)()); 

// Более того, в одно и то же время могут существовать несколько экземпляров одной и той же переменной, что ещё раз подтверждает тот факт, что с каждым вызовом функции локальные переменные пересоздаются.

//!!Эта возможность работать со ссылкой на какой-то экземпляр локальной переменной называется замыканием. Функция, замыкающая локальные переменные, называется замыкающей. 

function multiplier(x){ 
    
    return function(number){return x*number;};
}

var twice = multiplier(2);
console.log(twice(4));

/* multiplier возвращает замороженный кусок кода, который мы сохраняем в переменной twice. Последняя строка вызывает функцию, 
заключённую в переменной, в связи с чем активируется сохранённый код (return number * factor;). У него всё ещё есть доступ к переменной factor, 
которая определялась при вызове multiplier, к тому же у него есть доступ к аргументу, переданному во время разморозки (5) в качестве числового параметра.*/

//Рекурсия - ф-ия может вызывать сама себя при наличии условия выхода:

function power(base, exponenta) {
    if (exponenta == 0)
    return 1;
    else 
    return base * power(base, exponenta-1);

}
console.log(power(2, 4));

//ЗАДАЧА: Написать функцию, которая получив число, пытается найти последовательность сложений на 5 и умножений на 3, начиная с 1, которые приведут к заданномц числу (например 13 = 1*3+5+5) 

function FindSolution (target){
    function Find(start, history){
        if (start == target)
        return history
        else if (start>target)
        return null
        else 
        return Find(start+5, "(" + history + " + 5)") || 
        Find(start * 3, "(" + history + " * 3)"); //функция пробует оба возможных пути, начинающихся с заданного числа. Она дважды вызывает себя, один раз с каждым из способов. Если первый вызов возвращает не null, он возвращается. В другом случае возвращается второй.

    }
    return Find(1, "1");

}

console.log(FindSolution(34));