const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
//const config = require("../config/config");


const app = express();

//Imprimos variables de entorno por si no se cojen correctamente

console.log(`MONGO_HOST: ${process.env.MONGO_HOST}`);
console.log(`MONGO_PORT: ${process.env.MONGO_PORT}`);
console.log(`MONGO_DATABASE: ${process.env.MONGO_DATABASE}`);


// Ejemplo de configuración de conexión a MongoDB Atlas

// Configuración de middleware
app.use(express.json());
app.use(cors());

// Conexión a la base de datos MongoDB .
const hostname = process.env.MONGO_HOST;
const port1 = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;

const uri = `mongodb://${hostname}:${port1}/${database}`;



mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Resto del código de inicio del servidor
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });

// Definición del modelo de usuario
const userSchema = new mongoose.Schema({
  
  nombre: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Rutas de la API
app.post('/api/register', async (req, res) => {
  try {
    const user = new User(req.body);
    user.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al registrar el usuario.' });
  }
});

// Iniciar el servidor
 const port = 3000;
app.listen(port, () => {
  console.log(`Servidor backend iniciado en http://localhost:${port}`);
});
