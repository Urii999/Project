const { MongoClient } = require('mongodb');
const config = require("../node/src/config/config");
//const config = require("../config/config");

//const uri = `mongodb://MONGO_HOST:MONGO_PORT/ MONGO_DATABASE`;
//mongodb://localhost:27017/mydatabase


const hostname = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;

const uri = `mongodb://${hostname}:${port}/${database}`;


const mongodbClient = new MongoClient(uri, { useNewUrlParser: false, useUnifiedTopology: true });

async function connectToMongo() {
    console.log('Connecting to MongoDB...');
    try {
         mongodbClient.connect();
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.log(`Error connecting to MongoDB: ${err}`);
    }
}

connectToMongo();

module.exports = mongodbClient;