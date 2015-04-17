"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facebookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {msg: "must be an integer"}
        }
      },
      picture: {
        type: DataTypes.STRING,
      }
    }, {
      underscored: true,

      classMethods: {
        
        associate: function(models) {
          users.belongsToMany(models.funPosts, {
            through: "funPosts_users",
            foreignKey: "funPost_id"
          });
          users.belongsToMany(models.foodPosts, {
            through: "foodPosts_users",
            foreignKey: "foodPost_id"
          });
          users.belongsToMany(models.discussionPosts, {
            through:"discussionPosts_users",
            foreignKey: "discussionPost_id"
          });
        }
      }
    });
    return users;
};



