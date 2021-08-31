import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TreeService } from './tree.service';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';

@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}
  
  //http://localhost:3000/tree         select post method in postman
  @Post()
  create(@Body() createTreeDto: CreateTreeDto) {
    return this.treeService.create(createTreeDto);
  }
  
  //http://localhost:3000/tree    select get method in postman
  @Get()
  findAll() {
    return this.treeService.findAll();
  }

 // http://localhost:3000/tree/1000  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treeService.findOne(+id);
  }

  //PATCH /tree/1 with body
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreeDto: UpdateTreeDto) {
    return this.treeService.update(+id, updateTreeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treeService.remove(+id);
  }
}
