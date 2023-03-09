const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');


var Note = require('../model/Note')




//Get all
const getNotes = async (req, res, next) => {
    const notes = await Note.find( {});
    console.log(notes);
    };

const getNote = async (req, res, next) => {
  
        //  #swagger.parameters['id'] = { description: 'Get a specfic worker' }
    const userId = new ObjectId(req.params.id);
    const result = await Note.findOne({ _id: userId });
   
    console.log(result);
    
    };
  

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

module.exports = {getNotes, getNote, createNote};