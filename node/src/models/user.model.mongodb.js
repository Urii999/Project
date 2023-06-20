
const mongoClient = require('../services/mongodb.service');
const User = require('./user.model');
var mongo = require('mongodb');

class MongoDBUser extends User {
  constructor(database) {
    super(database);
    this.collection = mongoClient.db('api').collection('users');
  }

  create(user, cb) {
    this.collection.insertOne(user).then((result) => {
      if(err) return cb (err);
      cb(null, result.insertedId.toString);
    })
    .catch((err) => {
      cb(err);
    });
  
  }

  get(id, cb) {
    this.collection.findOne({ _id: mongo.ObjectId(id)}).then((result) => {
      cb(null,result);
    } ).catch((err) => {
      cb(err);
    });}


   getAll() {
    this.collection.find().toArray();
    return result;
  }

   getUserByEmail(email, cb) {
    this.collection.findOne({ email: email }).then((result) => {
      cb(null, result);
    }).catch((err) => {
      cb(err);
    }); 
  }

   getIdByEmail(email) {
    this.collection.findOne({ email: email }, { projection: { _id: 1 } });
    return result && result._id.toString();
  }

   update(id, updates) {
     this.collection.updateOne({ _id: id }, { $set: updates });
    return result.modifiedCount > 0;
  }

   delete(id) {
    this.collection.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}

module.exports = MongoDBUser;
