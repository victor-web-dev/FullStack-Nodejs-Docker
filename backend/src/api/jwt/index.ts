import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

interface IToken {
  token: string
}

export default class Token {
  private algorithm: string;

  private expiresIn: string;

  private secret: string;

  constructor(algorithm = 'HS256', expiresIn = '1d') {
    this.algorithm = algorithm;
    this.expiresIn = expiresIn;
    this.secret = <string>process.env.TOKEN_SECRET || 'jwt';
  }

  private jwtConfig(): object {
    return {
      algorithm: this.algorithm,
      expiresIn: this.expiresIn,
    };
  }

  public generate(data: jwt.JwtPayload): IToken {
    const token = jwt.sign(data, this.secret, this.jwtConfig());
    return {
      token,
    };
  }

  public verify(token: string): jwt.JwtPayload {
    try {
      const payload = jwt.verify(token, this.secret);
      return payload as jwt.JwtPayload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
