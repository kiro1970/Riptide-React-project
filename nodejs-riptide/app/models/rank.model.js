module.exports = (sequelize, Sequelize) => {
    const Rank = sequelize.define("ranks", {
      color: {
        type: Sequelize.STRING, 
        primaryKey: true
      },
      classesTaken: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      rankOrder: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {timestamps: false});
    return Rank;
  };