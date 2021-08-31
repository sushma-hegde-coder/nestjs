import { Pet } from './entities/pet.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Repository } from 'typeorm';

@Injectable()
export class PetService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}
  async create(createPetInput: CreatePetInput) {
    const create = this.petRepository.create(createPetInput);
    return await this.petRepository.save(create);
  }

  findAll() {
    return this.petRepository.find();
  }

  findOne(id: string) {
    return this.petRepository.findOne(id);
  }

  async update(id: string, updatePetInput: UpdatePetInput) {
    const up = await this.petRepository.update(
      updatePetInput.id,
      updatePetInput,
    );
    const get = await this.petRepository.findOne(updatePetInput);
    if (up.affected === 1) {
      return get;
    }
  }

  async remove(id: string) {
    const get = await this.petRepository.findOne(id);
    const del = await this.petRepository.delete(id);
    if (del.affected === 1) {
      return get;
    }
  }
  async findOwner(id: any) {
    return await this.petRepository.find({ ownerId: id });
  }
}
