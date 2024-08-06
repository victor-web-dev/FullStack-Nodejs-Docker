import { Model, DataTypes } from "sequelize";
import UserInfo from "./userinfo";
import Address from "./address";
import connection from ".";

export default class User extends Model {
  public id!: number;

  public email!: string;

  public password!: string;

  public admin!: boolean;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: connection,
    modelName: "users",
    timestamps: true,
  }
);

User.hasMany(Address);
User.hasOne(UserInfo);
Address.belongsTo(User);
UserInfo.belongsTo(User);
