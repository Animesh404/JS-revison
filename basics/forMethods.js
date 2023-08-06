
//Loop through arrays
/*----------------------------------------------
const items = ['Book', 
'Table', 'chair', 'Kite'];
const users = [
    {name: 'Brad'},
    {name: 'Brad'},
    {name: 'Brad'},
]

// for (const item of items) console.log(item);
for(const user of users) console.log(user.name);

//Loop over strings
const str = 'Hello World';

for(const letter of str) console.log(letter); 

//Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', '30');

for(const [key, value] of map) console.log(key, value);

//For in loops (used in objects) keys
const colorObj = {
    color1: 'blue',
    color2: 'red',
    color3: 'green',
    color4: 'orange'
};

for (const key in colorObj){
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr){
    console.log(colorArr[key]);
}
----------------------------------------------*/

//HIGH ORDER ARRAY METHODS

// 1 Array.forEach()

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(item => console.log(item));

// socials.forEach((item, index, arr) => console.log(`${index}-${item}`, arr));

const logSocials = social => console.log(social)


socials.forEach(logSocials)

// 2 Array.filter() --returns true condition ele in array

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNum = numbers.filter(number => number % 2 === 0);

// console.log(evenNum);//gets array of even nos

// 3 Array.map() --returns array with modified elements

const doubledNum = numbers.map(number => number * 2);

console.log(doubledNum);

// Chain map methods
const squareDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2);

console.log(squareDouble);

// Chaining Different methods
const evenDouble = numbers
    .filter(number => number % 2 === 0)
    .map(num => num *2);

console.log(evenDouble); 

// const youngPeeps = people
//     .filter(per => per.age <= 25)
//     .map(per => {
//         return {
//             name: per.firstName + per.lastName,
//             email: per.email,
//         }
//     })
