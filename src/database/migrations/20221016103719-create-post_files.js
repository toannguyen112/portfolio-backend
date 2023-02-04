"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("post_files", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "posts",
          key: "id",
        },
      },

      file_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "files",
          key: "id",
        },
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("post_files"),
};
