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
import { Tree } from './entities/tree.entity';

@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Post('direct')
  createRowsUseTreeDireclty(@Body() createTree: Tree[]) {
    return this.treeService.createRowsUsingTreeEntity(createTree);
  }

  @Post('dto-my-method')
  createRowsUseDto(@Body() createTreeDto: CreateTreeDto[]) {
    return this.treeService.createRowsUsingDto(createTreeDto);
  }

  @Post('dto-sir-method')
  createRowsUseDtoBySir(@Body() createTreeDto: CreateTreeDto[]) {
    return this.treeService.createRowsUsingDtoBySir(createTreeDto);
  }

  @Get()
  findAll() {
    return this.treeService.findAll();
  }

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
