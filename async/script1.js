// setTimeout(()=>{
//     console.log('Hello from callback');
// },2000);

// console.log('Hello from GLobal scope');

const changeText = () => {
    document.querySelector('h1').textContent = 'Hello from Callback';
}

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
    clearTimeout(timerId);
    console.log('Timer Cancelled');
})

// setInterval & clearInterval

let intervalID;
const startChange = () =>{
    if(!intervalID) intervalID = setInterval(changeRandomColor, 1000);
}

const changeRandomColor = ()=>{
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}
const stopRandomColor = () => clearInterval(intervalID);
document.querySelector('#cancel1').addEventListener('click', startChange);
document.querySelector('#cancel2').addEventListener('click', stopRandomColor);