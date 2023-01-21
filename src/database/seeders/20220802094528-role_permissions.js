"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("role_permissions", [
      {
        id: 1,
        role_id: 1,
        permission_id: 1,
      },
      {
        id: 2,
        role_id: 1,
        permission_id: 2,
      },
      {
        id: 3,
        role_id: 1,
        permission_id: 3,
      },
      {
        id: 4,
        role_id: 2,
        permission_id: 1,
      },
      {
        id: 5,
        role_id: 2,
        permission_id: 2,
      },
      {
        id: 6,
        role_id: 2,
        permission_id: 3,
      },
      {
        id: 7,
        role_id: 2,
        permission_id: 4,
      },
      {
        id: 8,
        role_id: 2,
        permission_id: 5,
      },
      {
        id: 9,
        role_id: 2,
        permission_id: 6,
      },
      {
        id: 10,
        role_id: 2,
        permission_id: 7,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("role_permissions", null, {});
  },
};
