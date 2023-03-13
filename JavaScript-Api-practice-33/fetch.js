// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json()) //  .json is not simmilar but close to json
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => console.log(data))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))

}
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))

}

function displayUsers(data) {
    console.log(data);

}