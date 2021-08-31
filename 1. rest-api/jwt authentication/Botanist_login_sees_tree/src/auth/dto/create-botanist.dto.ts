import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

//this isn't doing anything......it is just taking email,password,name from user and storing it in variables.
// it is not creating any table, to register we have to pass it as paramter to register function and manually set
// instead of dto you can directly use botanistEntity and can dirctly insert data just like how you did in express
// at that time no need to write botEmail: email like in dto, can use .create(req.body) it takes everything and stored in db as it is
export class CreateBotanistDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail() //can include validation in dto or in service
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
