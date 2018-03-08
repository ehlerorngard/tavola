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
    },
    parentMedConsent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {underscored: true, timestamps: false});

  Parent.associate = function(models) {
    Parent.hasMany(models.Student, {
      // through: ["family"],
      foreignKey: "parent_id",
      // otherKey: "student_id"
    });
  };

  return Parent;
};