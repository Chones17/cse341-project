const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


//Get all
const getEntries = async (req, res, next) => {
    try {
    mongodb.getDb().db().collection('notes').find().toArray((err, lists) => {
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

module.exports = getEntries;