var mongoose = require("mongoose");
var Person = require("../models/Person");

var personController = {};

// Show list of persons
personController.list = function(req, res) {
  Person.find({}).exec(function (err, persons) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/persons/index", {persons: persons});
    }
  });
};

// Show person by id
personController.show = function(req, res) {
  Person.findOne({_id: req.params.id}).exec(function (err, person) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/persons/show", {person: person});
    }
  });
};

// Create new person detail
personController.create = function(req, res) {
  res.render("../views/persons/create");
};

// Save new person detail
personController.save = function(req, res) {
  var person = new Person(req.body);

  person.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/person/create");
    } else {
      console.log("Successfully added new detail of a person.");
      res.redirect("/persons/show/"+person._id);
    }
  });
};

// Edit a persons details
personController.edit = function(req, res) {
  Person.findOne({_id: req.params.id}).exec(function (err, person) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/persons/edit", {person: person});
    }
  });
};

// Update a Persons detail
personController.update = function(req, res) {
  Person.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, age: req.body.age, gender: req.body.gender, mobileno: req.body.mobileno }}, { new: true }, function (err, person) {
    if (err) {
      console.log(err);
      res.render("../views/persons/edit", {person: req.body});
    }
    res.redirect("/persons/show/"+person._id);
  });
};

// Delete a persons details
personController.delete = function(req, res) {
  Person.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Person details deleted!");
      res.redirect("/persons");
    }
  });
};

module.exports = personController;
