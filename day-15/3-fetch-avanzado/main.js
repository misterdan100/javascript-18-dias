// //! Autorizar con credenciales usando BASIC
// let usuario = 'Daniel';
// let password = 'javascripTotal';

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
//     credentials: 'include',
//     headers: {
//         'Authorization': 'Basic' + btoa(usuario + ':' + password),
//         'Content-Type': 'application/json'
//     }
// })
// .then( response => response.json() )
// .then( data => console.log(data) )
// .catch( error => console.error(error));

//! Autorizar con credenciales usando BEARER
// let token = 'miToken';

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
//     credentials: 'include',
//     headers: {
//         'Authorization': 'Bearer' + token,
//         'Content-Type': 'application/json'
//     }
// })
// .then( response => response.json() )
// .then( data => console.log(data) )
// .catch( error => console.error(error));

//! buscar primero informacion en CACHE
// let token = 'miToken';

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
//     credentials: 'include',
//     cache: 'no-store',
//     headers: {
//         'Authorization': 'Bearer' + token,
//         'Content-Type': 'application/json'
//     }
// })
// .then( response => response.json() )
// .then( data => console.log(data) )
// .catch( error => console.error(error));

//! Redireccion con Fetch
let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    cache: 'default', //* define buscar siempre en el cache
    redirect: 'manual',
    headers: {
        'Authorization': 'Bearer' + token,
        'Content-Type': 'application/json'
    }
})
.then( response => {
    if(response.type === 'opaqueredirect') {
        let nuevaUbicacion = response.headers.get('Location')
        console.log(nuevaUbicacion);
    } else {
        return response.json()
    }
} )
// .then( response => response.json() )
.then( data => console.log(data) )
.catch( error => console.error(error));


