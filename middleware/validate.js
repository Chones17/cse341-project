const validator = require('../helpers/validate');

const saveJournal = (req, res, next) => {
    const validationRule = {
        title: 'require|string',
        description: 'require|string',
        createDate: 'require|Date'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: err
          });
        } else {
          next();
        }
      });
}

const saveNote = (req, res, next) => {
    const validationRule = {
        entryDate: 'require|Date',
        canon: ['require', 'string',{ 'in': [
            'Old Testament', 
            'New Testament', 
            'Book of Mormon', 
            'Doctrine and Covenants', 
            'Pearl of Great Price'
        ]}],
        book: 'require|string',
        chapter: 'require|integer|min:1|max:150',
        verse: 'require|integer|min:1|max:176',
        note: 'require|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: err
          });
        } else {
          next();
        }
      });
}

const saveTopic = (req, res, next) => {
    const validationRule = {
        topic: 'require|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: err
          });
        } else {
          next();
        }
      });
}

const saveUser = (req, res, next) => {
    const validationRule = {
        githubId: 'require|string',
        userName: 'string',
        email: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: err
          });
        } else {
          next();
        }
      });
}

module.exports = {
    saveJournal,
    saveNote,
    saveTopic,
    saveUser
};