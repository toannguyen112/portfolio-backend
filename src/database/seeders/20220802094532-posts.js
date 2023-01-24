"use strict";
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("posts", [
      {
        id: 1,
        name: `Post 1`,
        status: `ACTIVATE`,
      },
      {
        id: 2,
        name: `Post 2`,
        status: `ACTIVATE`,
      },
      {
        id: 3,
        name: `Post 3`,
        status: `ACTIVATE`,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
