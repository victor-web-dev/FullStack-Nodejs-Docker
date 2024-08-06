/* eslint-disable no-underscore-dangle */
import express, { Request, Response } from 'express';
import AuthenticateController from '../../api/controller/authenticate.controller';

export default class AuthenticateRoute {
  private _auth = express.Router();

  private controller = new AuthenticateController();

  constructor() {
    this.setup();
  }

  private setup(): void {
    // root route to check if server is ok
    this._auth.get('/', (req: Request, res: Response) => {
      res.status(200).send({ message: 'Server Working' });
    });

    this._auth.post('/', this.controller.login.bind(this.controller));
  }

  get authenticate() {
    return this._auth;
  }
}
