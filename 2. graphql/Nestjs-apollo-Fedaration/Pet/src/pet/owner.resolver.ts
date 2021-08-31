import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Owner } from './entities/owner.entity';
import { Pet } from './entities/pet.entity';
import { PetService } from './pet.service';

@Resolver((of) => Owner)
export class OwnerResolver {
  constructor(private readonly petService: PetService) {}

  @ResolveField((of) => [Pet])
  public pets(@Parent() owner: Owner): any {
    return this.petService.findOwner(owner.id);
  }
}
