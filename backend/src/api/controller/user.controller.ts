import { Response, Request } from 'express';
import code from 'http-status-codes';
import UserService from '../service/user.service';
import HttpError from '../../HttpError';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  // create
  public async createUser(req: Request, res: Response) {
    try {
      const data = await this.service.createUser(req.body);
      return res.status(data.status).json({ message: data.message });
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      return res.status(code.BAD_REQUEST).end();
    }
  }

  // read
  public async getAllUsers(_req: Request, res: Response) {
    try {
      const data = await this.service.getAllUsers();
      return res.status(code.OK).json(data);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      return res.status(code.BAD_REQUEST).end();
    }
  }

  // update
  public async updateUserData(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { user } = req.body;
      const data = await this.service.updateUserData(user, Number(id));
      return res.status(data.status).json({ message: data.message });
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      return res.status(code.BAD_REQUEST).end();
    }
  }

  public async updateUserAddressData(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { address } = req.body;
      const data = await this.service.updateUserAddressData(address, Number(id));
      return res.status(data.status).json({ message: data.message });
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      return res.status(code.BAD_REQUEST).end();
    }
  }

  public async updateUserInfoData(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { info } = req.body;
      const data = await this.service.updateUserInfoData(info, Number(id));
      return res.status(data.status).json({ message: data.message });
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      return res.status(code.BAD_REQUEST).end();
    }
  }
}
