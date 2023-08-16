const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res({name: 'John', age: 20});
    },1000);
});

// promise.then(data=>console.log(data));

const getPromise = async ()=>{
    const response = await promise;
    console.log(response);
};
// getPromise();

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
};

getUsers();

// without arrow function
// async function getUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();

//     console.log(data);
// };