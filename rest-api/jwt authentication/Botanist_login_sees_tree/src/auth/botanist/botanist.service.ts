import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBotanistDto } from '../dto/create-botanist.dto';
import { BotanistEntity } from '../entities/botanist.entity';

@Injectable()
export class BotanistService {
  //related to what you do inside Botanist table
  //CRUD behaviour of user entity
  constructor(
    @InjectRepository(BotanistEntity)
    private botanistRepo: Repository<BotanistEntity>,
  ) {}

  async findByEmail(email: string) {
    return this.botanistRepo.findOne({ where: { botEmail: email } });
  }

  async findById(id: string) {
    return this.botanistRepo.findOne({ where: { botId: id } });
  }

  async create(botanistDto: CreateBotanistDto) {
    //don't create botanist blindly
    //before creating new botanist, check whether he is already availabe, registered and forgotten as he has not logged in for long time
    const { email, password, name } = botanistDto;
    const isBotanistAvaliable = await this.findByEmail(email);
    if (isBotanistAvaliable) {
      throw new HttpException({ message: 'Botanist already exitsts' }, 400);
      //don't give email as pk or unique, entering the same email itself will not be allowed by entity def schema.
    }
    const botanist = this.botanistRepo.create({
      createdAt: new Date().toISOString(),
      botEmail: email,
      botPassword: password,
      botName: name,
    });
    return await this.botanistRepo.save(botanist);
  }
}
