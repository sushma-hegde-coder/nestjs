import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const save = await this.userRepository.create(createUserInput);
    return await this.userRepository.save(save);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne(id);
  }
  async findUser(email: string) {
    return await this.userRepository.findOne({ email });
  }
  async createToken({ id, email }: User) {
    return jwt.sign({ id, email }, 'secret');
  }
  async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.userRepository.update(
      updateUserInput.id,
      updateUserInput,
    );
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
