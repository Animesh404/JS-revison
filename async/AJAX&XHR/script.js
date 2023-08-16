const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https//api.github.com/users/Animesh404/repos');

// readyState has 5 possible values
// - 0:1 request not initialized
// - 1: server connection established
// 2: request received
// -3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        // console.log(JSON.parse(xhr.responseText));
        const data = JSON.parse(xhr.responseText);

        data.forEach(movie => {
            const li = document.createElement('Li');
            li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
            document.querySelector('#results').appendChild(li);
        });
    }
};

xhr.send();
