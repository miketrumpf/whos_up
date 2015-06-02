"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facebook_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
      },
      picture: {
        type: DataTypes.STRING,
      }
    }, {
      underscored: true,

      classMethods: {
        
        associate: function(models) {
          users.belongsToMany(models.fun_posts, {
            through: "funPosts_users",
            foreignKey: "user_facebook_id"
          });
          users.belongsToMany(models.food_posts, {
            through: "foodPosts_users",
            foreignKey: "user_facebook_id"
          });
          users.belongsToMany(models.discussion_posts, {
            through:"discussionPosts_users",
            foreignKey: "user_facebook_id"
          });
        }
      }
    });
    return users;
};



