"use strict";
module.exports = function(sequelize, DataTypes) {
  var discussionPosts = sequelize.define("discussion_posts", {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    underscored: true,

    classMethods: {
      associate: function(models){
        discussionPosts.belongsToMany(models.users, {
          through: "discussion_posts_users",
          foreignKey: "user_id"
        });
      }
    }
  });
  return discussionPosts
};