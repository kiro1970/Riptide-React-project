const db = require("../models");
const Schedule = db.schedules;
const Op = db.Sequelize.Op;
// Create and Save a new Schedule
exports.create = (req, res) => {
  
};
// Retrieve all Schedules from the database.
exports.findAll = (req, res) => {
  console.log('Attempting to FindAll.');
  const color = req.query.color;
  var condition = color ? { color: { [Op.iLike]: `%${color}%` } } : null;
  Schedule.findAll({ where: condition })
    .then(data => {
        console.log('Data is:'+data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving schedules."
      });
    });
};
// Find a single Schedule with an id
exports.findOne = (req, res) => {
  
};
// Update a Schedule by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Schedule with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Schedules from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Schedules
exports.findAllPublished = (req, res) => {
  
};
