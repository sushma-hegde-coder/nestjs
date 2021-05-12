import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
  ApiOkResponse,
} from '@nestjs/swagger';
import { CreateBotanistDto } from 'src/auth/dto/create-botanist.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { BotanistService } from './botanist/botanist.service';

@ApiTags('Authentication')
@Controller('auth') //auth is base url, whatever after auth written in any methods like Post, Get, Put is followup url
export class AuthController {
  constructor(
    private authService: AuthService,
    private botanistService: BotanistService,
  ) {}
  //every injection happens in constructor
  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Login Successful' })
  @ApiBadRequestResponse({
    description: 'User does not exists or invalid login details',
  })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @ApiCreatedResponse({ description: 'New botanist account created' })
  @ApiBadRequestResponse({
    description: 'Botanist already exists or server error',
  })
  @Post('register')
  registrationOfBotanist(@Body() createBotanistDto: CreateBotanistDto) {
    console.log('Im inside register func of auth router');
    return this.authService.registerBotanist(createBotanistDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  //when I want to change some value in req object (may be in header or body) I get it by using @Request,
  //I can change some property of this object or I can use some property of this object by req.property-name
  getProfile(@Request() req) {
    console.log(req);
    console.log(JwtAuthGuard);
    console.log(req.user); //user is a parameter in req object
    console.log(req.user.botanistId);
    return this.botanistService.findById(req.user.botanistId);
    //like res.locals.userId, in strategy we have stored id in botanistId
  }
}
