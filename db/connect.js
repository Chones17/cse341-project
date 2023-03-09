require('dotenv').config()
//console.log(process.env)
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;



let _db;

//Referenced 
const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  mongoose.connect(process.env.MONGO_URI + "?retryWrites=true&w=majority")

    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};