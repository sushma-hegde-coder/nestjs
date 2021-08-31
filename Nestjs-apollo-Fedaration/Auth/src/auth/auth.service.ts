import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/user/dto/login.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

import { jwtSecret } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(login: LoginDto) {
    const user = await this.userService.findUser(login.email);

    if (!user) {
      return null;
    }

    const passwordIsValid = user.password === user.password;
    return passwordIsValid ? user : null;
  }

  async login(user: LoginDto) {
    const u = await this.userService.findUser(user.email);
    const payload = {
      email: u.email,
      sub: u.id,
    };

    return await this.jwtService.sign(payload);
  }
  verify(token: string) {
    const decoded = this.jwtService.verify(token, {
      secret: jwtSecret,
    });

    const user = this.userService.findUser(decoded.email);

    if (!user) {
      throw new Error('Unable to get the user from decoded token.');
    }

    return user;
  }
}
