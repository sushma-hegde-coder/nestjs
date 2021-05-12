import { HttpException, Injectable } from '@nestjs/common';
import { BotanistService } from './botanist/botanist.service';
import { CreateBotanistDto } from './dto/create-botanist.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import constants from './constants';

//we want to keep authentication separate and user separate, otherwise would have used command to create CRUD only
//would have done it in botanist or auth completely there was no need to have both by going through so many commands and doing many things manually

@Injectable()
export class AuthService {
  //responsible for login and registration
  //authentication related logic
  //in auth service, use botanistService
  constructor(
    private botanistService: BotanistService, //inject botanist service object varname:vartype objectname:classname          only for injecting repository, the syntax is like that
    private jwtService: JwtService, //every service imported has to be injected
  ) {}

  registerBotanist(botanistDto: CreateBotanistDto) {
    console.log('inside auth service');
    console.log(
      `email: ${botanistDto.email}  password:${botanistDto.password}  name:${botanistDto.name}`,
    );
    return this.botanistService.create(botanistDto);
  }

  private async validateBotanist(loginDto: LoginDto) {
    try {
      const { email, password } = loginDto;
      const botanist = await this.botanistService.findByEmail(email);
      if (!botanist) {
        throw new HttpException({ message: 'Botanist not found' }, 400);
      }
      const isVerified = await bcrypt.compare(password, botanist.botPassword);
      if (!isVerified) {
        throw new HttpException({ message: 'invalid login details' }, 400);
      }
      return Promise.resolve(botanist);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /*my service exposes this function, validateBotanist is a private function
  since one function should do only one task, I'm writing logic separately into two other functions and making them as private 
  as I'm not accessing it outside my class*/
  async login(loginDto: LoginDto) {
    //basic idea of login is to return the response
    return this.validateBotanist(loginDto).then((botanist) => {
      //validate user---have written a function for this which is made private
      //generate token
      const payload = { sub: botanist.botId, email: botanist.botEmail };
      const token = this.jwtService.sign(payload); //can have options when it expires etc.
      //there are
      console.log(token);
      //no need to keep it as separate because it is already written in a separate service
      return Promise.resolve({
        //this is response body
        message: 'login successful',
        access_token: token, //return the token in response as well after generating token
        expiresIn: constants.EXPIRATION_TIME * 60, //to tell the client side that token expiration duration is this muchs so that they can add necessary logic according to that
      });
    });
  }
}
