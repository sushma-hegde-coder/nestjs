import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//Guard is a service you should register
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {} //type of stragegy used here is jwt
//implementation is already added, additional implementation can be added
