//ARRAY:-----------------------
let x;

//Arrray Literal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null]; //arrays in js can contain different datatypes

//Array Constructor
const fruits = new Array('apple', 'grape', 'orange');


x = numbers.length;
fruits[2] = 'pear';
// fruits.length = 2;

fruits[fruits.length] = 'strawberry';

x = fruits;

//Array methods
let y = numbers;
let m;
y.push(100);
y.pop();

y.unshift(99);//adds at 0th index
y.shift();//remove from 0th index
y.reverse();

m = y.includes(29);//true or false
m = y.indexOf(39);// -1 if number is not there

m = y.slice(1);//val @ ind 1 to end
m = y.slice(1, 4);//1-(4-1)
// SLICE DOESN'T MANIPULATE THE ORIG ARRAY BUT SPLICE CHANGES THE ORIG ARRAY
// m = y.splice(1, 4);//1 to 4 over ele gets removed from arr y
// m = y.splice(3, 1); //removes 1 element from ind 3
m = y.splice(1,4).reverse().toString().charAt(0);


//Nesting of arrays
// const fruits = ['apple', 'pear']
// console.log(m);
const arr = [1,2,3,4,5];
let res = arr.reverse();
res.unshift(6);
res[res.length] = 0; //res.push(0)
console.log(res);