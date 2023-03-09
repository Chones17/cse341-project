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

const getEntry = async (req, res, next) => {
    try {
        //  #swagger.parameters['id'] = { description: 'Get a specfic worker' }
    const userId = new ObjectId(req.params.id);
    mongodb.getDb().db().collection('notes').find({ _id: userId }).toArray((err, result) => {
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

const createEntry = async (req, res) => {
  const entry = {
    entryDate: req.body.entryDate,
    canon: req.body.canon,
    book: req.body.book,
    chapter: req.body.chapter,
    verse: req.body.verse,
    note: req.body.note
  };
  const result = await mongodb
  .getDb()
  .db()
  .collection('notes')
  .insertOne(entry);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while creating the note.');
  }
}

module.exports = {getEntries, getEntry, createEntry};