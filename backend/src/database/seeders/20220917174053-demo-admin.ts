/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, _Sequelize: any) {
    await queryInterface.bulkInsert("users", [
      {
        email: "admin@admin.com",
        password: "admin",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "test@test.com",
        password:
          "$2a$10$RfLeRlyM1pdfK1wP.Y5rf./lUYEyuAzuaetD.DQqE.RTmPbAgpiQ6", // teste1
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface: QueryInterface, _Sequelize: any) {
    await queryInterface.bulkDelete("users", {}, {});
  },
};
