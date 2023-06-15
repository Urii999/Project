const express = require('express');
const mongoose = require('mongoose');

// Cargar variables de entorno desde el archivo .env si estás utilizando dotenv
require('dotenv').config();

const app = express();

// Imprimir variables 
console.log(`MONGO_HOST: ${process.env.MONGO_HOST}`);
console.log(`MONGO_PORT: ${process.env.MONGO_PORT}`);
console.log(`MONGO_DATABASE: ${process.env.MONGO_DATABASE}`);

// Conexión a la base de datos
const hostname = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;

const uri = `mongodb://${hostname}:${port}/${database}`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Resto de la configuración del servidor
    app.listen(3000, () => {
      console.log('Servidor backend iniciado en http://localhost:3000');
    });
  })
  .catch(error => {
    console.error('Error de conexión a la base de datos:', error);
  });
