const User = require('./user.model');
const mongoClient = require('../services/mongodb.service');

class MongoDBUser extends User {
  constructor(database) {
    super(database);
    this.collection = mongoClient.db('api').collection('users');
  }

  create(user, cb) {
    this.collection.insertOne(user, (err, result) => {
      if (err) return cb(err);
      cb(null, result.insertedId.toString());
    });

    /*
    this.collection.insertOne(user, (err, result) => {
      if (err) return (err);
      // client.close();
      return result;
    });
*/

    //const result = await this.collection.insertOne(user);
    //return result.insertedId.toString();
  }

  async get(id) {
    const result = this.collection.findOne({ _id: id });
    return result;
  }

  async getAll() {
    const result = this.collection.find().toArray();
    return result;
  }

  async getUserByEmail(email, cb) {
    this.collection.findOne({ email: email }).then((result) => {
      cb(null, result);
    }).catch((err) => {
      cb(err);
    }); 
  }

  async getIdByEmail(email) {
    const result = this.collection.findOne({ email: email }, { projection: { _id: 1 } });
    return result && result._id.toString();
  }

  async update(id, updates) {
    const result =  this.collection.updateOne({ _id: id }, { $set: updates });
    return result.modifiedCount > 0;
  }

  async delete(id) {
    const result = this.collection.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}

module.exports = MongoDBUser;
