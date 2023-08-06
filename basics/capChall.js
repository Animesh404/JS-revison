// const myString = 'developer';
// let newString = myString;
// newString = newString[0].toUpperCase() + newString.slice(1);

// console.log(newString);

//number Challenge
// const x = Math.round(Math.random()*100+1);
// const y = Math.round(Math.random()*50+1);

// const sum = x+y;
// const diff = Math.abs(x-y);
// const pdt = x*y;
// const qt = x/y;
// const rem = x%y;

// console.log(x, y)
// console.log(sum, diff, pdt, qt, rem);

//Dates & Time
// let d;
// d=new Date(); //object type
// d = new Date(2021, 6, 11, 12, 30, 0, 0); //date and month starts from 0
// d = new Date('2021-07-10T12:30:00')

// // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off#:~:text=Javascript's%20Date%20class%20doesn't,the%20cause%20of%20your%20problem.

// d = Date.now() //milliseconds passed from jan 1 1970

// d = new Date('07-10-2022 12:30:00');
// d = d.getTime();
// d = d.valueOf();

// d = Math.floor(Date.now()/1000) //timestamp in seconds

// console.log(d);

//Date Object
let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth()+1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

// x = Intl.DateTimeFormat('en-US').format(d); //API for converting to local datetime format

x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('en-US', { month: 'long' }).format(d);

x = d.toLocaleDateString('en-GB', { month: 'short' })

x = d.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'India/New-Delhi',
})

console.log(x);