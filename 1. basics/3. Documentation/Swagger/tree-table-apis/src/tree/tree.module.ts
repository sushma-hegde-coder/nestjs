import { Module } from '@nestjs/common';
import { TreeService } from './tree.service';
import { TreeController } from './tree.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tree } from './entities/tree.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tree])], //I created the entity, tell nest js environment that I have one entity called as Tree
  //the feature I'm registering is the Tree
  controllers: [TreeController],
  providers: [TreeService],
})
export class TreeModule {}
