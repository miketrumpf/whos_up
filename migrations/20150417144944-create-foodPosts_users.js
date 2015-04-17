"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("foodPosts_users", {
      foodPost_id: {
        type: DataTypes.INTEGER
      },
      user_id: {
        type: DataTypes.INTEGER
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
    migration.dropTable("foodPosts_users").done(done);
  }
};
