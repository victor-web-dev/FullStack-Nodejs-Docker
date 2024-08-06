/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, _Sequelize: any) {
    await queryInterface.bulkInsert("userInfo", [
      {
        userId: 2,

        name: "John",
        birth: new Date("1886-5-20"),
        gender: "Male",
        phone: "+1-999-999-9999",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface: QueryInterface, _Sequelize: any) {
    await queryInterface.bulkDelete("userInfo", {}, {});
  },
};
