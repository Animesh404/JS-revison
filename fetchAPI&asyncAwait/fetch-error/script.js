// fetch('http://httpstat.us/200')
// .then(res=>res)
// .then(()=>{
//     console.log('success');
// })


// Test with response.ok
// fetch('http://httpstat.us/404')
// .then(res=>{
//     if(!res.ok) throw new Error('Request Failed');
//     return res;
// })
// .then(()=>{
//     console.log('success');
// })
// .catch(err=>console.log(err)); //doesn't go here

// Works with network error(when the page does not exist at all)
// fetch('http://hello123.net')
// .then(res=>res)
// .then(()=>{
//     console.log('success');
// })
// .catch(err=>console.log(err));

// Check for specific code
fetch('http://httpstat.us/404')
.then(res=>{
    if(res.status === 404) throw new Error('RNot Found');
    else if(res.status === 500) throw new Error('Server Error');
    else if(res.status !==200)  throw new Error('Request Failed');
    return res;
})
.then(()=>{
    console.log('success');
})
.catch(err=>console.log(err)); 