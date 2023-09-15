//* Configurar con ExpressJS el servidor de la APP
// import { Express } from 'express';
var express = require('express');
var app = express();

app.set('port', 3000); // El puerto con el que se trabajara
app.listen(3000); // para que este escuchando este puerto

//* Llamar al componente de mysql
var mysql = require('mysql');

//* Establecer los parametros de la conexion con sql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'daniel',
    password: 'rootroot',
    database: 'mibasenueva'
});

//* Conectando con la db
connection.connect();

//* POST => agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES (3, "Daniel", 1, 3107, "Medellin")', (error, resultados) => {
    if(error) throw error;
    console.log(resultados);
});

//* READ => consulta para ver la tabla completa
connection.query('SELECT * FROM cliente', (error, filas) => {
    if(error) throw error;
    console.log(filas);
});

//* UPDATE => modificar un registro
connection.query('UPDATE cliente SET genero = 0, telefono = 166166 WHERE identificador = 3', (error, resultados) => {
    if(error) throw error;
    console.log(resultados);
});

//* READ
connection.query('SELECT * FROM cliente', (error, filas) => {
    if(error) throw error;
    console.log(filas);
});

//* DELETE => Eliminar registros
connection.query('DELETE FROM cliente WHERE identificador = 3', (error, resultados) => {
    if(error) throw error;
    console.log(resultados);
});

//* READ
connection.query('SELECT * FROM cliente', (error, filas) => {
    if(error) throw error;
    console.log(filas);
});


//? Es importante despues de hacer cualquier pedido cerrar la conexion para dejar de consumir recursos
//* Cerrando conexion
connection.end();