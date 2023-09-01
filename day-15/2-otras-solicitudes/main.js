
//! PUT ==> modificar registros
// fetch('https://jsonplaceholder.typicode.com/posts/5', {
//     method: "PUT",
//     headers: {
//         'Content-type': "application/json"
//     },
//     body: JSON.stringify({
//         title: "nuevo titulo",
//         body: "este es el nuevo articulo"
//     })
// })
// .then( respuesta => respuesta.json())
// .then( data => console.log(data))
// .catch( error => console.error('error: ', error))

// //! DELETE ==> elimina registros
// fetch('https://jsonplaceholder.typicode.com/posts/5', {
//     method: "DELETE", 
// })
// .then( respuesta => respuesta.json())
// .then( data => console.log(data))
// .catch( error => console.error('error: ', error))

//! PATCH ==> modificar registros por partes
fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: "PATCH",
    headers: {
        'Content-type': "application/json"
    },
    body: JSON.stringify({
        title: "nuevo titulo2",
    })
})
.then( respuesta => respuesta.json())
.then( data => console.log(data))
.catch( error => console.error('error: ', error))