import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  phonenumber: string;

  @Field()
  email: string;
}
