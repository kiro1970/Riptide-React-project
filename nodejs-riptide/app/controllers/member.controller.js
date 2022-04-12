const db = require("../models");
const Member = db.members;
const Op = db.Sequelize.Op;
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('1061246817484-df9o16t8aoc6j1vdsf8hkt5rbelcdr05.apps.googleusercontent.com');
// Create and Save a new Member
exports.create = (req, res) => {
  
};
exports.login = async (req, res) => {
  const { token }  = req.body    ;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: '1061246817484-df9o16t8aoc6j1vdsf8hkt5rbelcdr05.apps.googleusercontent.com'
});
  const { name, email, picture } = ticket.getPayload();
  console.log (name, email) ;
  console.log('Holy shit... it worked!');
};
// Retrieve all Members from the database.
exports.findAll = (req, res) => {
  console.log('Attempting to FindAll.');
  const color = req.query.color;
  var condition = color ? { color: { [Op.iLike]: `%${color}%` } } : null;
  Member.findAll({ where: condition })
    .then(data => {
        console.log('Data is:'+data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    });
};
// Find a single Member with an id
exports.findOne = (req, res) => {
    let id = req.params['id'];
  Member.findOne({  where: {member_id: id} }) .then(data => {
    console.log('Data is:'+data);
         res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving members."
        });
    });

};

// Update a Member by the id in the request
exports.update = (req, res) => {
    if( req.body.member_id > 0)
        Member.update( req.body, {  where: {member_id: req.body.member_id} });
    console.log('updating ' +  req.body.first_name);
};
// Delete a Member with the specified id in the request
exports.delete = (req, res) => {
};
// Delete all Members from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Members
exports.findAllPublished = (req, res) => {
  
};
