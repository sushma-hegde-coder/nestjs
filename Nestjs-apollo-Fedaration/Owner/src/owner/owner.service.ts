import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}
  async create(createOwnerInput: CreateOwnerInput) {
    const create = this.ownerRepository.create(createOwnerInput);
    return await this.ownerRepository.save(create);
  }

  findAll() {
    return this.ownerRepository.find();
  }

  findOne(id: string) {
    return this.ownerRepository.findOne(id);
  }

  async update(id: string, updateOwnerInput: UpdateOwnerInput) {
    const up = await this.ownerRepository.update(
      updateOwnerInput.id,
      updateOwnerInput,
    );
    const get = await this.ownerRepository.findOne(updateOwnerInput);
    if (up.affected === 1) {
      return get;
    }
  }

  async remove(id: string) {
    const get = await this.ownerRepository.findOne(id);
    const del = await this.ownerRepository.delete(id);
    if (del.affected === 1) {
      return get;
    }
  }
}
