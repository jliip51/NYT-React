const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Bookmark
      .find({})
      .sort({ date: -1 })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Bookmark
      .create(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Bookmark
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Bookmark
      .findOneAndRemove({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }
};
