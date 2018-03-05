module.exports = function(sequelize, DataTypes) {
  var Staff = sequelize.define("Staff", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    // ,isAdmin: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    //   allowNull: false
    // },
    // isTeacher: {
    // type: DataTypes.BOOLEAN,
    // defaultValue: false,
    // allowNull: false
    // }
  });

  // Staff.associate = function(models) {
  //   Staff.hasMany(models.Student, {
  //   });
  // };

  return Staff;
};