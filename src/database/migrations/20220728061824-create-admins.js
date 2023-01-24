"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admins", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      tokens: {
        allowNull: true,
        type: Sequelize.TEXT,
      },

      address: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      phone: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("admins");
  },
};
