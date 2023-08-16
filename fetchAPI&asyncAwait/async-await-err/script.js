
// MORE PREFFERED
const getUsers = async () => {
    try {
        const response = await fetch('http://httpstat.us/500');

        if(!response.ok){
            throw new Error('Request Failed');
        }
        const data = await response.text();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
};
// getUsers();

const getPosts = async () => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch('http://httpstat.us/500');

        if(!response.ok){
            throw new Error('Request Failed');
        }
        const data = await response.text();

        console.log(data);

};

getPosts().catch(err=>console.log(err)); //handling error outside the function