const mongodb = require("../config/connect");
const ObjectId = require("mongodb").ObjectId;

var Topic = require("../model/Topic");

//Get all
const getTopics = async (req, res, next) => {
<<<<<<< HEAD
  try {
    const result = await Topic.find({});
=======
  // #swagger.tags = ['Topic']
  const result = await Topic.find( {});
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Get One
const getTopic = async (req, res, next) => {
<<<<<<< HEAD
  try {
    const userId = new ObjectId(req.params.id);
=======
  // #swagger.tags = ['Topic']
  const userId = new ObjectId(req.params.id);
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c
    const result = await Topic.findOne({ _id: userId });
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Create
const createTopic = async (req, res) => {
<<<<<<< HEAD
  try {
    var topic = new Topic({
=======
  // #swagger.tags = ['Topic']
  var topic = new Topic({
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c
      title: req.body.title,
      description: req.body.description,
    });
    const result = await topic.save();
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Update
const updateTopic = async (req, res) => {
<<<<<<< HEAD
  try {
    const user_id = new ObjectId(req.params.id);
=======
  // #swagger.tags = ['Topic']
  const user_id = new ObjectId(req.params.id);
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c
    var topic = {
      title: req.body.title,
      description: req.body.description,
    };
    const result = await Topic.findByIdAndUpdate(user_id, topic);
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Delete
const deleteTopic = async (req, res) => {
<<<<<<< HEAD
  try {
    const user_id = new ObjectId(req.params.id);
    const result = await Topic.findByIdAndDelete(user_id);
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};
=======
  // #swagger.tags = ['Topic']
  const user_id = new ObjectId(req.params.id);
  const result = await Topic.findByIdAndDelete(user_id)
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c

module.exports = { getTopics, getTopic, createTopic, updateTopic, deleteTopic };
