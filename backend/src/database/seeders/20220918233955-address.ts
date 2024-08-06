/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, _Sequelize: any) {
    await queryInterface.bulkInsert("address", [
      {
        userId: 2,
        postalCode: "KM5 GY7",
        street: "street",
        streetNumber: 344,
        observation: "",
        city: "Toronto",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface: QueryInterface, _Sequelize: any) {
    await queryInterface.bulkDelete("address", {}, {});
  },
};
