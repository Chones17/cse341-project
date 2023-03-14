const mongodb = require("../config/connect");
const ObjectId = require("mongodb").ObjectId;

var Topic = require("../model/Topic");

//Get all
const getTopics = async (req, res, next) => {
  try {
    const result = await Topic.find({});
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Get One
const getTopic = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await Topic.findOne({ _id: userId });
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Create
const createTopic = async (req, res) => {
  try {
    var topic = new Topic({
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
  try {
    const user_id = new ObjectId(req.params.id);
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
  try {
    const user_id = new ObjectId(req.params.id);
    const result = await Topic.findByIdAndDelete(user_id);
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

module.exports = { getTopics, getTopic, createTopic, updateTopic, deleteTopic };
