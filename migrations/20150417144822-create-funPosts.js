"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("fun_posts", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      exp_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      facebook_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    migration.dropTable("fun_posts").done(done);
  }
};
