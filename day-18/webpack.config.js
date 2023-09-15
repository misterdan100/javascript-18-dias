const path = require('path');

module.exports = {
  entry: './src/index.js', // El archivo JS princiapl de la app
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio archivo compilado
    filename: 'mainpro.js', // Nombre del archivo compilado
  },
};