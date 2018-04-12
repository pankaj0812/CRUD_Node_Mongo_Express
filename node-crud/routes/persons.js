var express = require('express');
var router = express.Router();
var person = require("../controllers/PersonController.js");

// Get all persons
router.get('/', function(req, res) {
  person.list(req, res);
});

// Get single person by id
router.get('/show/:id', function(req, res) {
  person.show(req, res);
});

// Create new detail
router.get('/create', function(req, res) {
  person.create(req, res);
});

// Save new detail
router.post('/save', function(req, res) {
  person.save(req, res);
});

// Edit detail
router.get('/edit/:id', function(req, res) {
  person.edit(req, res);
});

// Update detail
router.post('/update/:id', function(req, res) {
  person.update(req, res);
});

// Delete detail
router.post('/delete/:id', function(req, res, next) {
  person.delete(req, res);
});

module.exports = router;
