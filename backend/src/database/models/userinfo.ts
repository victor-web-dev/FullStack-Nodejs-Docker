import { Model, DataTypes } from "sequelize";
import connection from ".";

export default class UserInfo extends Model {
  public id!: number;

  public name!: string;

  public birth!: Date;

  public gender!: string;

  public phone!: string;
}
UserInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "users",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "userInfo",
    timestamps: true,
  }
);
