const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const mongouser = ''
const mongopsw = ''
const mongocluster = ''

//MONGO_HOST=mongodb
//MONGO_PORT=27017
//MONGO_USER=root
//MONGO_PASSWORD=root
//MONGO_DATABASE=api


//mongoose.connect(`mongodb+srv://${mongouser}:${mongopsw}@${mongocluster}`

// Configuración de middleware
app.use(express.json());
app.use(cors());

// Conexión a la base de datos MongoDB
mongoose.connect(`mongodb+srv://${mongouser}:${mongopsw}@${mongocluster}`,

//mongoose.connect('mongodb://localhost/27017')
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a la base de datos');
}).catch((error) => {
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
    await user.save();
    res.status(200).json({ message: 'Usuario registrado exitosamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al registrar el usuario.' });
  }
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor backend iniciado en http://localhost:${port}`);
});
