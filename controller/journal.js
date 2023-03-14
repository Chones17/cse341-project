const mongodb = require("../config/connect");
const ObjectId = require("mongodb").ObjectId;

var Journal = require("../model/Journal");

//Get all
const getJournals = async (req, res) => {
  // #swagger.tags = ['Journal']
  const result = await Journal.find( {});
  res.status(200).json(result);
  };

//Get One
const getJournal = async (req, res) => {
  // #swagger.tags = ['Journal']
  const userId = new ObjectId(req.params.id);
  const result = await Journal.findOne({ _id: userId });
  res.status(200).json(result);
  };

//Create
const createJournal = async (req, res) => {
  // #swagger.tags = ['Journal']
  var journal = new Journal({
    title: req.body.title,
    description: req.body. description
})
const result = await journal.save()
res.status(200).json(result);
}


//Update
const updateJournal = async (req, res) => {
  // #swagger.tags = ['Journal']
  const user_id = new ObjectId(req.params.id);
  var journal = {
  title: req.body.title,
  description: req.body. description
}
const result = await Journal.findByIdAndUpdate(user_id, journal)

    res.status(200).json(result);
  } catch {
    res.status(500).json(result);
  }
};

//Delete

const deleteJournal = async (req, res) => {
  // #swagger.tags = ['Journal']
  const user_id = new ObjectId(req.params.id);
  const result = await Journal.findByIdAndDelete(user_id)

  res.status(200).json(result);
}
