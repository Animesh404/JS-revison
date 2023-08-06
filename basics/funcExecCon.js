// function sayHello(){
//     console.log("Hi");
// }

// sayHello();

// function sub(num1, num2){
//     return Math.abs(num1-num2);
// }

// console.log(sub(5,10));

// FizzBuzz Challenge
for(let i=1;i<=100;i++){
    if(i%3 === 0){
        console.log("Fizz" );
        if(i%5 === 0 && i%3 === 0) console.log("FizzBuzz"+ i); 
    }   
    else if(i%5 === 0) console.log("Buzz");
    
} 