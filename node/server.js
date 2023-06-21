
const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require("./src/config/config");


const UserRouter = require('./src/routes/user.route');
const UrlRouter = require('./src/routes/url.route');


// Otro código del servidor...

console.log('Ruta actual:', process.cwd());

// Más código del servidor...

// Create the express 

const app = express();


// Use body parser middleware

app.use(express.json());
// app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Conecta a la base de datos MongoDB:


/*//mongoose.connect(`mongodb://:${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}:${MONGO_PORT}/${MONGO_DATABASE}`,
mongoose.connect('mongodb+srv://aleixmarti:cT5EywBVBylK6FJI@cluster0.7lu1qqu.mongodb.net/', {

  useNewUrlParser: true,
  useUnifiedTopology: true,

})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
   console.error('Error connecting to MongoDB:', error);

  });*/

// Define el esquema y modelo de usuario:

/*const userSchema = new mongoose.Schema({
  nombre: String,
  password: String
});*/

/*const User = mongoose.model('User', userSchema);*/

//Agregar rutas de la API

app.post('/api/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ message: 'Usuario registrado exitosamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al registrar el usuario.' });
  }
});


// Use the user router
app.use('/api/users', UserRouter);

// Use the URL router
app.use('/api/urls', UrlRouter);

// Start the server
app.listen(config.PORT, () => {
  console.log(`API server is listening on port ${config.PORT}`);
});
