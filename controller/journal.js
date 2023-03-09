const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//Get all
const getJournals = async (req, res, next) => {
    try {
    mongodb.getDb().db().collection('journals').find().toArray((err, lists) => {
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

const getJournal = async (req, res, next) => {
    try {
        //  #swagger.parameters['id'] = { description: 'Get a specfic worker' }
    const userId = new ObjectId(req.params.id);
    mongodb.getDb().db().collection('journals').find({ _id: userId }).toArray((err, result) => {
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

const createJournal = async (req, res) => {
  const journal = {
    title: req.body.title,
    description: req.body.description,
    createDate: req.body.createDate
  };
  const result = await mongodb
  .getDb()
  .db()
  .collection('journals')
  .insertOne(journal);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while creating the journal.');
  }
}

module.exports = {getJournals, getJournal, createJournal};
