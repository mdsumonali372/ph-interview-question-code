


function getTodos() {

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))

}


function displayTodos(data) {


    const todosContainer = document.getElementById('todosContainer')




    for (const todos of data) {

        const div = document.createElement('div')

        div.innerHTML = ` 
        
        <h4>userId ${todos.userId}  </h4>
<p> title ${todos.title} </p>
        
        `

        todosContainer.appendChild(div)
        console.log(todos);

    }



}


getTodos()