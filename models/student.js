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
      allowNull: false 
    },
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  });

  Student.associate = function(models) {
    Student.belongsTo(models.Parent, {
      foreignKey: {
        allowNull: false
      }
    });
    Student.belongsTo(models.Staff, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Student;
};
