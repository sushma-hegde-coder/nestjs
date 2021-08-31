import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { OwnerResolver } from './owner.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetResolver, PetService, OwnerResolver],
})
export class PetModule {}
