const { classsession } = require("../models");
const db = require("../models");
const ClassSession = db.classsession;
const Op = db.Sequelize.Op;
// Create and Save a new Class
exports.create = (req, res) => {
  
};
// Retrieve all Classs from the database.
exports.findAll = (req, res) => {
  console.log('Attempting to FindAll.');
  const color = req.query.color;
  var condition = color ? { color: { [Op.iLike]: `%${color}%` } } : null;
  classsession.findAll({ where: condition })
    .then(data => {
        console.log('Data is:'+data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving classes."
      });
    });
};
// Find a single Class with an id
exports.findOne = (req, res) => {
  
};
// Update a Class by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Class with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Classs from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Classs
exports.findAllPublished = (req, res) => {
  
};
