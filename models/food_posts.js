"use strict";
module.exports = function(sequelize, DataTypes) {
  var food_posts = sequelize.define("food_posts", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {msg: "must be a valid date"},
        isAfter: {args: ["4/17/2015"], msg: "Can not be in the past"}
      }
    },
    exp_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate:{msg: "must be a valid date"},
        isAfter: {args:["4/17/2015"], msg: "Can not be in the past"}
      }
    },
    facebook_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
        type: DataTypes.STRING
      }
  },
  {
    underscored: true,

    classMethods: {
      associate: function(models){
        food_posts.belongsToMany(models.users, {
          through: "foodPosts_users",
          foreignKey: "food_post_id"
        });
      }
    }
  });
  return food_posts
};