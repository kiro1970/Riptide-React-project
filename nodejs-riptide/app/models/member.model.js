module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define("members", {
      member_id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      member_since: {
        type: Sequelize.DATE,
      },
      classes_taken: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      current_rank: {
        type: Sequelize.STRING,
        allowNull: false
      },
      next_rank: {
        type: Sequelize.STRING,
        allowNull: false
      },
      classes_til_rank_up: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    },
    {timestamps: false});
    return Member;
  };