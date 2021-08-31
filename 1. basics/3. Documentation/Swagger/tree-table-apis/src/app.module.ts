import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreeModule } from './tree/tree.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TreeModule],
})
export class AppModule {}
