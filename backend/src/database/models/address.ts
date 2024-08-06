import { Model, DataTypes } from "sequelize";
import connection from ".";

export default class Address extends Model {
  public addressId!: number;

  public postalCode!: string;

  public street!: string;

  public streetNumber!: number;

  public observation!: string;

  public city!: string;
}
Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "user",
        key: "id",
      },
    },
    postalCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    streetNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observation: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "address",
    timestamps: true,
  }
);
