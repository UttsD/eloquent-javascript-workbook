// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function GetMin(x1, x2) {
if (x1 < x2)
return x1;
else return x2;

}

console.log(GetMin(0,10));

// написать рекурсивную функцию, определяющую нечетное число (true) или четное (false) исходя из следующих правил: 
// Единица нечетная, ноль четный, а у любого числа N четность такая же, как и у N-2

function IsEven(number) {
   
    if (number == 1) return false;
    else if (number == 0) return true
    else if (number<0)
    return IsEven(-number);
    else
     return IsEven(number-2);
   
   
}

console.log(IsEven(100));
console.log(IsEven(5));
console.log(IsEven(-100));
console.log(IsEven(-101));
// Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
//Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.
//Символ номер N строки можно получить, добавив к ней .charAt(N) ( "строчка".charAt(5) ) 
let stroka = "barabulyab";

console.log(stroka.charAt(5));

function CountBs(stroke){
    var findchar = "b";
    var countB=0;
    for (var i=0; i<=stroke.length; i++){
        if (stroke.charAt(i)==findchar) countB+=1;
        
    }
    return countB;
}


function CountChar(stroke, findchar){
    
    var countB=0;
    for (var i=0; i<=stroke.length; i++){
        if (stroke.charAt(i)==findchar) countB+=1;
        
    }
    return countB;
}
console.log(CountBs(stroka));

//правильный ответ: 
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }