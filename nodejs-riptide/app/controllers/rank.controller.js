const db = require("../models");
const Rank = db.ranks;
const Op = db.Sequelize.Op;
// Create and Save a new Rank
exports.create = (req, res) => {
  
};
// Retrieve all Ranks from the database.
exports.findAll = (req, res) => {
  console.log('Attempting to FindAll.');
  const color = req.query.color;
  var condition = color ? { color: { [Op.iLike]: `%${color}%` } } : null;
  Rank.findAll({ where: condition })
    .then(data => {
        console.log('Data is:'+data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ranks."
      });
    });
};
// Find a single Rank with an id
exports.findOne = (req, res) => {
  
};

// Update a Rank by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Rank with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Ranks from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Ranks
exports.findAllPublished = (req, res) => {
  
};
