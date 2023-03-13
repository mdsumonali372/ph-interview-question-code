
function loadPost() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))


}

/* 
1. get the element where you Want to add the new element 

2. create child element 
3. set innerText or innerHTML 
4. appentChild

*/


function displayPost(data) {


    const postContainer = document.getElementById('post-container')

    for (const post of data) {

        console.log(post);
        const div = document.createElement('div')

        div.classList.add('post')
        div.innerHTML = `
        <h4> user-${post.userId}  </h4>
    
        <h5> post: ${post.title} </h5>
        <p> ${post.body} </p>
        `
        postContainer.appendChild(div)

    }

}

loadPost()


function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));



function createPost() {


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}




