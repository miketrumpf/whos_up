"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facebook_id: {
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
            through: "fun_posts_users",
            foreignKey: "fun_post_id"
          });
          users.belongsToMany(models.foodPosts, {
            through: "food_posts_users",
            foreignKey: "food_post_id"
          });
          users.belongsToMany(models.discussionPosts, {
            through:"discussion_posts_users",
            foreignKey: "discussion_post_id"
          });
        }
      }
    });
    return users;
};



