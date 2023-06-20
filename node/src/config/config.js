require("dotenv").config({path:__dirname+'/../.env'});
require('dotenv').config();

const config = {
  PORT: process.env.PORT || 3000,

  AUTH_SECRET_KEY: process.env.AUTH_SECRET_KEY || "secret_key",
  AUTH_KEY_EXPIRATION: process.env.AUTH_KEY_EXPIRATION || "1h",


  MONGO_HOST: process.env.MONGO_HOST || "",
  MONGO_PORT: process.env.MONGO_PORT || "",
  MONGO_USER: process.env.MONGO_USER || "",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "",
  MONGO_DATABASE: process.env.MONGO_DATABASE || "",
  
};


module.exports = config;