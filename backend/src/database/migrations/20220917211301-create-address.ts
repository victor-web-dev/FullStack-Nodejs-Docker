import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.createTable("address", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      postalCode: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      streetNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      observation: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface: QueryInterface, _Sequelize: any) {
    await queryInterface.dropTable("address");
  },
};
