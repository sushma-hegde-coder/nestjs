import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { BotanistEntity } from './entities/botanist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { BotanistService } from './botanist/botanist.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import constants from './constants';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt.guard';

@Module({
  imports: [
    //register modules. Modules are feature. If you want to use any functionality of a feature you need to register it
    TypeOrmModule.forFeature([BotanistEntity]),
    //doing global configeration for token so that any one who uses jwt sign this configuration will be taken automatically
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: 60 * constants.EXPIRATION_TIME },
      secret: constants.SECRET_KEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, BotanistService, JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
