// Операторы списков map, reduce и filter могут заменить цикл for
// MAP - встроенный метод, который позволяет модифицировать каждый элемент массива, используя один и тот же подход
// Примеры задач: возвести каждый элемент списка в квадрат, получить имя из списка пользователя, обработать каждую строку регулярным выражением 
// Определен в Array.prototype => можно вызвать в любом массиве и передать коллбэк в качестве первого документа
// Когда map вызывается на массиве, для каждого элемента выполняется колбэк, а затем возвращается новый модифицированный массив, обработанный колбэком
// под капотом map передает 3 аргумента колбэку: текущий элемент массива, индекс текущего элемента, весь массив для которого был вызван map
// Пример. Задача: есть приложение с задачами, которые необходимо выполнить в течении дня: 

let tasks = [
    {
        'name': 'Task name1',
        'duration': 120,
        'done': false
    },
    {
        'name': 'Task name2',
        'duration': 100,
        'done': false
    },
    {
        'name': 'Task name3',
        'duration': 180,
        'done': false
    },
    {
        'name': 'Task name4',
        'duration': 60,
        'done': false
    },
    {
        'name': 'Task name5',
        'duration': 120,
        'done': false
    },
]

//нужно вернуть массив, в котором для каждого task будет только name
// Если использовать цикл for:

var tasks_name = [];

for(var i=0; i < tasks.length; i++){
    tasks_name.push(tasks[i].name);
}

console.log(tasks_name);

//Если использовать forEach:

var tasks_nameFE = [];

tasks.forEach(element => {
    tasks_nameFE.push(element.name);
});

console.log(tasks_nameFE);

// используя map можно написать так: 

var tasks_nameM = tasks.map(function(task, index, array) { //index, array можно опустить, т.к. они не используются
    return task.name;
});
console.log(tasks_nameM);

//с использованием стрелочной функции даже нет необходимости писать return: 
var tasks_nameS = tasks.map(task => task.name);

console.log(tasks_nameS);

//Filter - фильтрует массив по условию и убирает ненужные элементы. 
/* В качестве первого аргумента filter принимает колбэк, этот колбэк затем вызывается для каждого элемента и в результате возвращается новый массив,
содержащий только те элементы, для которых колбэк вернул true
под капотом filter передает 3 аргумента колбэку: текущий элемент массива, индекс текущего элемента, весь массив для которого был вызван filter */
// как и map, filter определен в Array.prototype, 
// Пример: вернуть список задач, на выполнение которых ушло более 2-х часов.
// используя forEach:

var difficult_tasks = [];

tasks.forEach(element => {
    if(element.duration >= 120)
    difficult_tasks.push(element);
});

console.log(difficult_tasks);

// с помощью filter: 

var difficult_tasksF = tasks.filter(function(task, index, array){
    return task.duration >= 120;
});

console.log(difficult_tasksF);

//со стрелочной функцией: 
var difficult_tasksS = tasks.filter(task => task.duration >= 120);