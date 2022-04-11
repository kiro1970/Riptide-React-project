module.exports = (sequelize, Sequelize) => {
    const ClassSession = sequelize.define("classsession", {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
      classType: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      when: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      capacity: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      enrolled: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {timestamps: false});
    return ClassSession;
  };