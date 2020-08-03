export function getUsers (callback) {
    fetch('http://192.168.1.111:8000/users').then(response => {
        return response.json();
    }).then(callback)
}
