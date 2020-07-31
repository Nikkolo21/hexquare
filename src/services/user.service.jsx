export function getUsers (callback) {
    fetch('http://localhost:8000/users').then((response) => {
        return response.json();
    }).then(callback)
}

/* // Example
    getUsers(elem =>{
        console.log(elem);
    });
*/