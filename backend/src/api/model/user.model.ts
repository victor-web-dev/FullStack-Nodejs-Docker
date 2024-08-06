/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import code from "http-status-codes";
import User from "../../database/models/user";
import Address from "../../database/models/address";
import UserInfo from "../../database/models/userinfo";
import HttpError from "../../HttpError";
import {
  IUserFullData,
  IUser,
  IAddress,
  IUserInformation,
} from "../interfaces/user.interface";

export default class UserModel {
  // Create
  public async createUser(user: IUserFullData) {
    try {
      const usr = await User.create({ ...user });
      await Address.create({ userId: usr.id, ...user.address });
      await UserInfo.create({ userId: usr.id, ...user.userInfo });
      return true;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpError(code.INTERNAL_SERVER_ERROR, error.message);
      }
    }
  }

  // Read
  public async findUser(user: IUser): Promise<IUser | undefined> {
    try {
      const data = await User.findOne({ where: { email: user.email } });
      return data as IUser;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpError(code.INTERNAL_SERVER_ERROR, error.message);
      }
    }
  }

  public async findAllUsers() {
    try {
      const usr = await User.findAll({
        attributes: { exclude: ["password"] },
        include: [{ model: Address }, { model: UserInfo }],
      });
      return usr;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpError(code.INTERNAL_SERVER_ERROR, error.message);
      }
    }
  }

  public async findUserFullData(user: IUser) {
    try {
      const usr = await User.findOne({
        where: { email: user.email },
        include: [{ model: Address }, { model: UserInfo }],
      });
      return usr;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpError(code.INTERNAL_SERVER_ERROR, error.message);
      }
    }
  }

  // update user
  public async updateUser(
    user: IUser,
    id: number
  ): Promise<boolean | undefined> {
    try {
      const data = await User.update({ ...user }, { where: { id } });
      return data[0] !== 0;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpError(code.INTERNAL_SERVER_ERROR, error.message);
      }
    }
  }

  public async updateUserAddress(
    address: IAddress,
    id: number
  ): Promise<boolean | undefined> {
    try {
      const data = await Address.update(
        { ...address },
        { where: { userId: id } }
      );
      return data[0] !== 0;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpError(code.INTERNAL_SERVER_ERROR, error.message);
      }
    }
  }

  public async updateUserInfo(
    user: IUserInformation,
    id: number
  ): Promise<boolean | undefined> {
    try {
      const data = await UserInfo.update(
        { ...user },
        { where: { userId: id } }
      );
      return data[0] !== 0;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpError(code.INTERNAL_SERVER_ERROR, error.message);
      }
    }
  }
}
