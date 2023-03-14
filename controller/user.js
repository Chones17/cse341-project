const mongodb = require("../config/connect");
const ObjectId = require("mongodb").ObjectId;

var User = require("../model/User");

//Get all
const getUsers = async (req, res, next) => {
<<<<<<< HEAD
  try {
    const result = await User.find({});
=======
  // #swagger.tags = ['User']
  const result = await User.find( {});
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Get One
const getUser = async (req, res, next) => {
<<<<<<< HEAD
  try {
    const userId = new ObjectId(req.params.id);
=======
  // #swagger.tags = ['User']
  const userId = new ObjectId(req.params.id);
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c
    const result = await User.findOne({ _id: userId });
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Create
const createUser = async (req, res) => {
<<<<<<< HEAD
  try {
    var user = new User({
=======
  // #swagger.tags = ['User']
  var user = new User({
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c
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
<<<<<<< HEAD
  try {
    const user_id = new ObjectId(req.params.id);
=======
  // #swagger.tags = ['User']
  const user_id = new ObjectId(req.params.id);
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c
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
<<<<<<< HEAD
  try {
    const user_id = new ObjectId(req.params.id);
    const result = await User.findByIdAndDelete(user_id);
    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};
=======
  // #swagger.tags = ['User']
  const user_id = new ObjectId(req.params.id);
  const result = await User.findByIdAndDelete(user_id)
>>>>>>> 35e6d56d1cdd731335985c180da52672f4588f8c

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
