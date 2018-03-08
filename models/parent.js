// var models = require("./");
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
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
    parentMedConsent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {underscored: true});

  // Parent.associate = function(models) {
  //   Parent.hasMany(models.Student);
  //   // Parent.hasMany(models.Student, {
  //     // through: ["family"],
  //     foreignKey: "student_id"
  //   // });
  // };

  return Parent;
};