module.exports = {
    HOST: "localhost",
    USER: "kyle",
    PASSWORD: "kyle",
    DB: "RipTide",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };