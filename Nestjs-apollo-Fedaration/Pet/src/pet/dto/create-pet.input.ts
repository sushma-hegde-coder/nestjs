import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  color: string;

  @Field()
  age: number;

  @Field()
  ownerId: string;
}
