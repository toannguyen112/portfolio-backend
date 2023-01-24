"use strict";
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("admins", [
      {
        id: 1,
        role_id: 2,
        username: `admin`,
        name: `admin`,
        password: `admin`,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
