const { QueryTypes } = require("sequelize");
const db = require("../models");
const Schedule = db.schedules;
const Op = db.Sequelize.Op;
// Create and Save a new Schedule
exports.create = (req, res) => {
  let member_id = req.body.member_id;
  let class_id = req.body.class_id;
  if(member_id && class_id){
    Schedule.create( {
      class_id:parseInt(class_id),
      member_id:member_id,
      classcompleted:false
    });

  }
  
};
// Retrieve all Schedules from the database.
exports.findAll = (req, res) => {
  console.log('Attempting to FindAll.');
  const member_id = req.query.member_id;
  db.sequelize.query( 'select classsessions."classType", classsessions."when" from classsessions, schedules where schedules.class_id= classsessions.id and schedules.member_id = :param1',
    {
      replacements: { param1: member_id},
      type: QueryTypes.SELECT
    }).then(data => {
      console.log('Data is:'+data);
      res.send(data);
    });
/*
  Schedule.findAll({ where: { member_id: member_id  }
})
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
    */
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
