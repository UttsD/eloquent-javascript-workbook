/* 
Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
*/

function range(start, end, step){
    let arr = [];
    step*= end > start ? 1 : -1;
    if (step > 0)
    for (let i = start; i <=end; i+=step)        arr.push(i);
    if (step<0)
    for (let i = start; i >=end; i+=step)        arr.push(i);
    
    
    return arr;

}

console.log(range(1, 10, 2));

/* 
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
*/

function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result+= arr[i];
        
    }
    return result;
}

console.log(sum(range(1, 10, 2)));

/*напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов, а вторая меняет порядок в исходном массиве*/

function reverseArray(arr){
    let revArr = [];

    for (let i = arr.length-1; i >= 0; i--)
    {
        revArr.push(arr[i]);
    }
    return revArr;
}

function reverseArrayInPlace(arr){
    

    for (let i = 0; i <= Math.floor(arr.length /2 ); i++)
    {
        let old = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i -1] = old;
        
    }
    return arr;
}

console.log(reverseArrayInPlace(range(1, 10, 1)));

/*
теория: Объекты могут быть использованы для построения различных структур данных
например - список (не массив)
Список - связанный набор данных, каждый элемент которого содержит ссылку на следующий (1-й на второй, второй на третий и.т.д.)
*/

var list = {
    value: 1,
    rest: {
        value: 2,
        rest:{
        value: 3,
        rest: null
        }
    }
};

// Списки могут делиться частью своей структуры. можно использовать ранее объявленный список в других списках: 

var list2 = {
    value: 0,
    rest: list
};

//Задача: Напишите функцию arrayToList, которая строит структуру списка, получая в качестве аргумента массив


function arrayToList(arr){
    var obj = null;
    for (let i = arr.length - 1; i > 0; i--){
        obj = {value: i, rest: obj}   
    }

    return obj;
}

function  listToArray(list){
    var arr = [];
    for (node = list; node; node = node.rest){
        arr.push(node.value);
        console.log(node);
    }
    return arr;
}

console.log(arrayToList(['1', '2', '3', '4']));
console.log(listToArray(arrayToList(['1', '2', '3', '4'])));

/*Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, */

function prepend (list, n){
    return {value: n, rest: list};
}

console.log(prepend(arrayToList(['1', '2']), 3));
console.log(prepend(10, prepend(20, null)));
console.log(arrayToList(['1', '2', '3', '4']))

/*функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента.*/

