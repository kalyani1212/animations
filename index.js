// var num1=prompt("enter the value of Num1");
// var num2=prompt("enter the value of Num2");
// console.log(num1+num2);
// console.log(num1-num2);
var num1="45";
var num2=20;
console.log(typeof num1,typeof num2);
var add=num1+num2;
console.log(typeof add,typeof sub);
console.log(num1==55);

//using number const
var num1="45a";
console.log(typeof num1,num1);
num1=Number(num1);
// //NaN - not a number
console.log(typeof num1,num1);
var bool=false;
console.log(bool,typeof bool);
bool=Number(bool);
console.log(bool,typeof bool);
//by using parseInt() function;
var num1="12.5a";
console.log(typeof num1,num1);
num1=parseInt(num1);
console.log(typeof num1, num1);
//by using parseFloat() function;
var num1="12.5apple";
console.log(typeof num1,num1);
num1=parseFloat(num1);
console.log(typeof num1, num1);


//converting boolean into string type
var num1=45;
var bool=true;
console.log(num1,typeof num1);
console.log(bool,typeof bool);
//string const
// var str1=String(bool);
// var str=String(num1);


//toString() function
var str1=num1.toString();
var str=bool.toString();

console.log(str1,typeof str1);
console.log(str,typeof str);


//Boolean const.

var val="";  // num 0 NaN undefined " " " " "apple"
console.log(val,typeof val);
val=Boolean(val);
console.log(val,typeof val);


var num1="65";
var num2=43;
console.log(typeof num1,typeof num2);
var add=num1+num2;
var sub=num1-num2;
console.log(typeof add,typeof sub);