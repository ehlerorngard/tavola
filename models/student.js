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

//   Post.associate = function(models) {
//     // We're saying that a Post should belong to an Author
//     // A Post can't be created without an Author due to the foreign key constraint
//     Post.belongsTo(models.Author, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Post;
// };
