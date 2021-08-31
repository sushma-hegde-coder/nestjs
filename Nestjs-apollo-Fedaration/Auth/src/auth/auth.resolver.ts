import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginDto } from 'src/user/dto/login.dto';
import { User } from 'src/user/entities/user.entity';
import { Any } from 'typeorm';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async login(@Context() req: any, @Args('login') login: LoginDto) {
    console.log(req.jwt, '____________________R');

    return this.authService.login(login);
  }
}
