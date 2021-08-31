import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Pet } from './pet.entity';
@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Owner {
  @Field(() => ID)
  @Directive('@external')
  id: string;

  @Field((type) => [Pet])
  pets?: Pet[];
}
