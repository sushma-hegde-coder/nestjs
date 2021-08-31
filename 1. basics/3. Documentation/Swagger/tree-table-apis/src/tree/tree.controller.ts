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
import { ApiTags, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('Trees') // for separation
@Controller('tree') //no semicolon after decorator
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Post()
  create(@Body() createTreeDto: CreateTreeDto) {
    return this.treeService.create(createTreeDto);
  }

  @Get()
  findAll() {
    return this.treeService.findAll();
  }

  @ApiNotFoundResponse({ description: 'No data is found for the specified ID' })
  @ApiOkResponse({ description: 'Product Data found' })
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
