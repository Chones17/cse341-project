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

const getUser = async (req, res, next) => {
    try {
        //  #swagger.parameters['id'] = { description: 'Get a specfic worker' }
    const userId = new ObjectId(req.params.id);
    mongodb.getDb().db().collection('users').find({ _id: userId }).toArray((err, result) => {
        if (err){
        res.status(400).json({message: err});
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
    });
    } catch (err){
    res.status(500).json(err);
    }
    };


const createUser = async (req, res) => {
  const user = {
    githubId: req.body.githubId,
    userName: req.body.userName,
    email: req.body.email
  };
  const result = await mongodb
  .getDb()
  .db()
  .collection('users')
  .insertOne(user);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while creating the user.');
  }
}

module.exports = {getUsers, getUser, createUser};