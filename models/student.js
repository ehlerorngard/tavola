module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
    },
    asthma: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    allergy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    epi_pen: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    chronic_condition: {
      type: DataTypes.Text,
      allowNull: true
    }
  }, {underscored: true});

  Student.associate = function(models) {
    Student.belongsToMany(models.Parent, {
      through: "family",
      foreignKey: "student_id",
      otherKey: "parent_id"
    });
    Student.belongsTo(models.Staff, {
      foreignKey: "teacher_id",
      targetKey: "student_id"
    });
  };

  return Student;
};
