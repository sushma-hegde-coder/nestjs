import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import {Employee} from "./employee/entities/employee.entity"
import { EmployeeService } from './employee/employee.service';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Employee]),],
  controllers: [AppController],
  providers: [AppService,EmployeeService]
})
export class AppModule {}
