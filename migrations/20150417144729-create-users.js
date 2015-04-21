"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      facebook_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      picture: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("users").done(done);
  }
};
