const validator = require('../helpers/validate');

const saveJournal = (req, res, next) => {
    const validationRule = {
        title: 'require|string',
        description: 'require|string'
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
        entryDate: 'require|string',
        canon: 'require|string',
        book: 'require|string',
        chapter: 'require|string',
        verse: 'require|string',
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
        title: 'require|string',
        description: 'require|string'
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
        title: 'require|string',
        description: 'require|string'
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