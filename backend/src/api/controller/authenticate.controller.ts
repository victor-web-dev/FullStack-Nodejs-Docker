import { Response, Request } from 'express';
import code from 'http-status-codes';
import AuthenticateService from '../service/authenticate.service';
import HttpError from '../../HttpError';

export default class AuthenticateController {
  private service: AuthenticateService;

  constructor() {
    this.service = new AuthenticateService();
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this.service.login({ email, password });
      return res.status(code.OK).json(token);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      return res.status(code.BAD_REQUEST).end();
    }
  }
}
