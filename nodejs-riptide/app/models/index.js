const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.members = require("./member.model.js")(sequelize, Sequelize);
db.ranks = require("./rank.model.js")(sequelize, Sequelize);
db.classsession = require("./classsession.model.js")(sequelize, Sequelize);
db.schedules = require("./schedule.model.js")(sequelize, Sequelize);
module.exports = db;
