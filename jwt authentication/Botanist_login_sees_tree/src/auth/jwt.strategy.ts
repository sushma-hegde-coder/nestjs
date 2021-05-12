//JWT strategy: JWT middleware to verify the token
//stragegy is nothing but a service , register the service in module

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import constants from './constants';

//strategy is creating some sort of information and storing it somewhere in application. It is service
@Injectable()
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    //base validation :checking if token is valid using the key
    //token has not expired
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, //whether token is valid or invalid
      secretOrKey: constants.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    //any additional validation needed should be added here
    console.log(payload); //additional validations you can add here
    return { botanistId: payload.sub, email: payload.email }; //like locals res.locals
    //it will go and sit inside req object's body as req.user key's value
    //I'm setting req.user property with this value
    //store the info got from token in variables, these variables can be used throughout the program
    //thes variables are valid till the request is available(till )
  }
  //this is the implementation of middleware
  //use this middleware
}
