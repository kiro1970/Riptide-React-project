const { classsession } = require("../models/index.js");

module.exports = app => {
  const ranks = require("../controllers/rank.controller.js");
  const members = require("../controllers/member.controller.js");
  const classsession = require("../controllers/classsession.controller.js");
  const schedules = require("../controllers/schedule.controller.js");
    var router = require("express").Router();
    // Create a new Rank
    router.post("/ranks", ranks.create);
    // Retrieve all Ranks
    router.get("/ranks", ranks.findAll);
    // Retrieve a single Rank with id
    router.get("/ranks/:id", ranks.findOne);
    // Update a Rank with id
    router.post("/ranks/update/:id", ranks.update);
    // Delete a Rank with id
    router.delete("/ranks/:id", ranks.delete);
    // Create a new Rank
    router.delete("/ranks", ranks.deleteAll);

    router.post("/members/login", members.login);
    router.post("/members", members.create);
    // Retrieve all Ranks
    router.get("/members", members.findAll);
    // Retrieve a single Rank with id
    router.get("/members/:id", members.findOne);
    // Update a Rank with id
    router.post("/members/update/:id", members.update);
    // Delete a Rank with id
    router.delete("/members/:id", members.delete);
    // Create a new Rank
    router.delete("/members", members.deleteAll);
    // Retrieve all Ranks
   
    // Create a new Rank
    router.post("/classsession", classsession.create);
    // Retrieve all Ranks
    router.get("/classsession", classsession.findAll);
    // Retrieve a single Rank with id
    router.get("/classsession/:id", classsession.findOne);
    // Update a Rank with id
    router.post("/classsession/:id", classsession.update);
    // Delete a Rank with id
    router.delete("/classsession/:id", classsession.delete);
    // Create a new Rank
    router.delete("/classsession", classsession.deleteAll);

    // Create a new Rank
    router.post("/schedules", schedules.create);
    // Retrieve all Ranks
    router.get("/schedules/:member_id", schedules.findAll);
    // Retrieve a single Rank with id
    router.get("/schedules/:id", schedules.findOne);
    // Update a Rank with id
    router.post("/schedules/:id", schedules.update);
    // Delete a Rank with id
    router.delete("/schedules/:id", schedules.delete);
    // Create a new Rank
    router.delete("/schedules", schedules.deleteAll);

    app.use('/api', router);
  };