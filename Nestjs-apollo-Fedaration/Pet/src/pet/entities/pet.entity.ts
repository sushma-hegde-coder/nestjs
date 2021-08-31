import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from './owner.entity';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Pet {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  type: string;

  @Field(() => Int)
  @Column()
  age: number;

  @Field()
  @Column()
  color: string;

  @Field(() => Owner)
  owner: Owner;

  @Field()
  @Column()
  ownerId?: string;
}
