module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedules", {
      class_id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
      },
      member_id: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      classcompleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    },
    {timestamps: false});
    return Schedule;
  };