// const toggle = e => e.target.classList.toggle('danger');

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'},
];

// const createPost = (post, cb) => {
//     setTimeout(() =>  {
//         posts.push(post);
//         cb();//callback
//     }, 2000);
// }


// const getPosts = () => {
//     setTimeout(()=>{
//         posts.forEach((post)=>{
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//             document.querySelector('#posts').appendChild(div);
//         });
//     }, 1000);
// }
const createPost = (post) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>  {
            let error = false;
            if(!error){
                posts.push(post);
                resolve();
            }else reject('Something Went wrong'); 
        }, 2000);
    });   
}


const getPosts = () => {
    setTimeout(()=>{
        posts.forEach((post)=>{
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}

const showError = error =>{
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong>${error}</strong>`;
    document.getElementById('posts').appendChild(h3);
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(showError);