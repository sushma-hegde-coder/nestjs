import { ApiProperty } from '@nestjs/swagger';
//how your data looks like to the end user
//structure of the data you will pass

export class CreateTreeDto {
  @ApiProperty({ example: 'peak wood tree' }) //in order to get schema at the end of the documentation write it above each field
  name: string;

  @ApiProperty() //@ApiProperty({{required: false}}) if you don't want * mark
  species: string;

  @ApiProperty()
  age: number; // ?:  then optional
}
