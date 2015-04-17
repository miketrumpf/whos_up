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
      },
      friends: {
        type: DataTypes.INTEGER
      }
    }, {
      underscored: true,

      classMethods: {
        associate: function(models) {

        }
      }
    });
    return users;
};



