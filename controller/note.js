const mongodb = require("../config/connect");
const ObjectId = require("mongodb").ObjectId;
const mongoose = require("mongoose");

var Note = require("../model/Note");

//Get all
const getNotes = async (req, res, next) => {
  try {
    // #swagger.tags = ['Note']
    const result = await Note.find({});
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Get One
const getNote = async (req, res, next) => {
  try {
    // #swagger.tags = ['Note']
    const userId = new ObjectId(req.params.id);

    const result = await Note.findOne({ _id: userId });
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Create
const createNote = async (req, res) => {
  try {
    var note = new Note({
      entryDate: req.body.entryDate,
      canon: req.body.canon,
      book: req.body.book,
      chapter: req.body.chapter,
      verse: req.body.verse,
      note: req.body.note,
    });
    const result = await note.save();
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Update
const updateNote = async (req, res) => {
  try {
    const user_id = new ObjectId(req.params.id);
    // #swagger.tags = ['Note']
    var note = new Note({
      entryDate: req.body.entryDate,
      canon: req.body.canon,
      book: req.body.book,
      chapter: req.body.chapter,
      verse: req.body.verse,
      note: req.body.note,
    });
    const result = await note.save();
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Delete

const deleteNote = async (req, res) => {
  try {
    // #swagger.tags = ['Note']
    const user_id = new ObjectId(req.params.id);
    const result = await Note.findByIdAndDelete(user_id);
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };
