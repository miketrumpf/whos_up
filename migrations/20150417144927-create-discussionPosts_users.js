"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("discussionPosts_users", {
      discussionPost_id: {
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
    migration.dropTable("discussionPosts_users").done(done);
  }
};
