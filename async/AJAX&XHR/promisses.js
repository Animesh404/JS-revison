// an object that represents the eventual completion or failure of an async operation\
const promise = new Promise((resolve, reject)=>{
    // Do some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});
promise.then(()=>{
    console.log('Promise consumed');
});

new Promise((resolve, reject)=>{
    // Do some async task
    setTimeout(() => {
        resolve({ name: 'John', age: 30 });
    }, 1000);
}).then((user)=>{
    console.log(user);
})

const getUser = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;

        if(!error){
            resolve({ name: 'John', age: 30});
        }else{
            reject('Error: Something went wrong');
        }
    }, 1000);
})

getUser.then((user)=> console.log(user))
        .catch((error)=>console.log(error))
        .finally(()=>console.log('The promise has been resolved or rejected')) //runs even if rejected or resolved

console.log('Hello from global scope');