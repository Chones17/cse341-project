const mongodb = require("../config/connect");
const ObjectId = require("mongodb").ObjectId;

var User = require("../model/User");

//Get all
const getUsers = async (req, res, next) => {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Get One
const getUser = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await User.findOne({ _id: userId });
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Create
const createUser = async (req, res) => {
  try {
    var user = new User({
      title: req.body.title,
      description: req.body.description,
    });
    const result = await user.save();
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Update
const updateUser = async (req, res) => {
  try {
    const user_id = new ObjectId(req.params.id);
    var user = {
      title: req.body.title,
      description: req.body.description,
    };
    const result = await User.findByIdAndUpdate(user_id, user);
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Delete

const deleteUser = async (req, res) => {
  try {
    const user_id = new ObjectId(req.params.id);
    const result = await User.findByIdAndDelete(user_id);
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
