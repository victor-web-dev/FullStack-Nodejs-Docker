/* eslint-disable no-underscore-dangle */
import express, { Request, Response } from 'express';
import UserController from '../../api/controller/user.controller';

export default class UserRoute {
  private _user = express.Router();

  private controller = new UserController();

  constructor() {
    this.setup();
  }

  private setup(): void {
    this._user.get('/', (req: Request, res: Response) => {
      res.status(200).send({ message: 'Server Working' });
    });

    this._user.get('/list', this.controller.getAllUsers.bind(this.controller));

    this._user.post('/register', this.controller.createUser.bind(this.controller));

    this._user.put('/update/basic/:id', this.controller.updateUserData.bind(this.controller));
    this._user.put('/update/address/:id', this.controller.updateUserAddressData.bind(this.controller));
    this._user.put('/update/info/:id', this.controller.updateUserInfoData.bind(this.controller));
  }

  get user() {
    return this._user;
  }
}
