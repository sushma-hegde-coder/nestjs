import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginDto } from 'src/user/dto/login.dto';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  validate(login: LoginDto) {
    const user = this.authService.validate(login);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
