import code from 'http-status-codes';
import bcrypt from 'bcryptjs';
import UserModel from '../model/user.model';
import Jwt from '../jwt';
import { IUser } from '../interfaces/user.interface';
import HttpError from '../../HttpError';

export default class Authenticate {
  private model: UserModel;

  private jwt: Jwt;

  constructor() {
    this.model = new UserModel();
    this.jwt = new Jwt();
  }

  public async login(data: IUser) {
    const user = await this.model.findUser(data);
    if (!user) {
      throw new HttpError(code.BAD_REQUEST, 'invalid user');
    }
    const isPwdValid:boolean = await bcrypt.compare(<string>data.password, <string>user.password);
    if (isPwdValid) {
      const { id, email, admin } = user;
      const payload = { email, admin };
      const loginData = {
        id,
        ...this.jwt.generate(payload),
        admin: admin ? 'true' : 'false',
      };
      return loginData;
    }
    throw new HttpError(code.BAD_REQUEST, 'invalid password');
  }
}
