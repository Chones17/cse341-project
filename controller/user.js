const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


//Get all
const getUsers = async (req, res, next) => {
    try {
    mongodb.getDb().db().collection('users').find().toArray((err, lists) => {
      if (err){
        res.status(400).json({message: err});
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    } catch (err){
      res.status(500).json(err);
    }
    };

module.exports = getUsers;