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
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parentMedConsent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Parent.associate = function(models) {
    Parent.hasMany(models.Student, {
      onDelete: "cascade"
    });
  };

  return Parent;
};