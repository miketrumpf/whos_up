"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("fun_posts_users", {
      funPost_id: {
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
    migration.dropTable("fun_posts_users").done(done);
  }
};
