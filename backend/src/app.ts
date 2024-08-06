import express from 'express';
import cors from 'cors';
import UserRoute from './routes/user/user.route';
import AuthenticateRoute from './routes/authenticate/authenticate.route';

export default class App {
  private app = express();

  private userRoute = new UserRoute(); // user endpoints

  private authRoute = new AuthenticateRoute(); // authentication endpoints

  constructor() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use('/user', this.userRoute.user);
    this.app.use('/authenticate', this.authRoute.authenticate);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`listening to port:${PORT}`));
  }
}
