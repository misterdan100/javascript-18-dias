//! Axios GET
// axios.get('https://jsonplaceholder.typicode.com/posts/')
//     .then(respuesta => console.log(respuesta.data))
//     .catch(error => console.log(error))

//! Axios POST
// let datos = {
//     title: 'Nuevo post',
//     body: 'Mi contenido'
// };

// axios.post( 'https://jsonplaceholder.typicode.com/posts/', datos )
// .then( respuesta => console.log(respuesta) )
// .catch( error => console.log(error) )

//! Axios solicitudes simultaneas
// let datos = {
//     title: 'Nuevo post',
//     body: 'Mi contenido'
// };

// let pedido1 = axios.get('https://api.ejemplo.com/data1');
// let pedido2 = axios.get('https://api.ejemplo.com/data2');
// let pedido3 = axios.get('https://api.ejemplo.com/data3');

// axios.all( [pedido1, pedido2, pedido3 ] )
// .then( axios.spread( (respuesta1, respuesta2, respuesta3 ) => {
//     // hacer algo con la respuesta de cada peticion
// } ))
// .catch( error => {
//     // codigo para manejar errores
// } )

//! Axios ==> INTERCEPTORES
let datos = {
    title: 'Nuevo post',
    body: 'Mi contenido'
};

let miToken = 'este_es_mi_token';

axios.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${miToken}`;
        return config;
    }, (error) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (respuesta) => {
        respuesta.data.customField = "nuevo campo"
        return respuesta;
    }, (error) => {
        return Promise.reject(error)
    }
)



let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');

axios.all( [pedido1, pedido2, pedido3 ] )
.then( axios.spread( (respuesta1, respuesta2, respuesta3 ) => {
    // hacer algo con la respuesta de cada peticion
} ))
.catch( error => {
    // codigo para manejar errores
} )