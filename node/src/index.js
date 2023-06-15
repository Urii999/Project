const express = require('express');
const bodyParser = require('body-parser');
const config = require("../node/src/config/config");

//const config = require("./config/config");
const UserRouter = require('./routes/user.route');
const UrlRouter = require('./routes/url.route');

// Create the express app
const app = express();
const port = config.PORT;

// Use body parser middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Use the user router
app.use('/api/users', UserRouter);

// Use the URL router
app.use('/api/urls', UrlRouter);

// Start the server

app.listen(port, (error) => {
  if (error) {
    console.error('Error al iniciar el servidor:', error);
    return;
  }
  console.log(`API server is listening on port ${port}`);
});
