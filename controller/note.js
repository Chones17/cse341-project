const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');


var Note = require('../model/Note')




//Get all
const getNotes = async (req, res, next) => {
    const notes = await Note.find( {});
    console.log(notes);
    };

//Get One
const getNote = async (req, res, next) => {
      const userId = new ObjectId(req.params.id);
    const result = await Note.findOne({ _id: userId });
    console.log(result);
    };
  
//Create
const createNote = async (req, res) => {
    var note = new Note({
    entryDate: req.body.entryDate,
    canon: req.body.canon,
    book: req.body.book,
    chapter: req.body.chapter,
    verse: req.body.verse,
    note: req.body.note
  })
  const result = await note.save()
  console.log(result);
}


//Update
const updateNote = async (req, res) => {
    const user_id = new ObjectId(req.params.id);
    var note = {
    entryDate: req.body.entryDate,
    canon: req.body.canon,
    book: req.body.book,
    chapter: req.body.chapter,
    verse: req.body.verse,
    note: req.body.note
  }
  const result = await Note.findByIdAndUpdate(user_id, note)
  console.log(result);
}

module.exports = {getNotes, getNote, createNote, updateNote};