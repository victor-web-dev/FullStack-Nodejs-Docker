import bcrypt from 'bcryptjs';
import code from 'http-status-codes';
import UserModel from '../model/user.model';
import {
  IAddress, IUser, IUserFullData, IUserInformation,
} from '../interfaces/user.interface';
import HttpError from '../../HttpError';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  // create
  public async createUser(user: IUserFullData) {
    const salt = await bcrypt.genSalt();
    const pwd = await bcrypt.hash(<string>user.password, salt);
    const newUser = { ...user, password: pwd };
    const isUserCreated = await this.model.createUser(newUser);
    if (isUserCreated) {
      return { status: code.OK, message: 'Done' };
    }
    throw new HttpError(code.BAD_REQUEST, 'Service Error');
  }

  // read
  public async getAllUsers() {
    const users = await this.model.findAllUsers();
    return users;
  }

  // update
  public async updateUserData(user: IUser, id: number) {
    // update user basic data
    const { password } = user;
    const newUser = { ...user };
    if (password) {
      const salt = await bcrypt.genSalt();
      const newPwd = await bcrypt.hash(<string>password, salt); // generate new password hash
      newUser.password = newPwd;
    }
    const isUserUpdated = await this.model.updateUser(newUser, id);
    if (!isUserUpdated) throw new HttpError(code.BAD_REQUEST, 'Service user Error');
    return { status: code.OK, message: 'Updated' };
  }

  public async updateUserAddressData(address: IAddress, id: number) {
    // update user address
    const isAddressUpdated = await this.model.updateUserAddress(address, id);
    if (!isAddressUpdated) throw new HttpError(code.BAD_REQUEST, 'Service address Error');
    return { status: code.OK, message: 'Updated' };
  }

  public async updateUserInfoData(info: IUserInformation, id: number) {
    // update user info
    const isUserInfoUpdated = await this.model.updateUserInfo(info, id);
    if (!isUserInfoUpdated) throw new HttpError(code.BAD_REQUEST, 'Service info Error');
    return { status: code.OK, message: 'Updated' };
  }
}
