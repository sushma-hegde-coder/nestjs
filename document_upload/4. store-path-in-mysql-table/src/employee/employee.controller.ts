import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEmployeePhotoDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';


@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployee: Employee) {
    console.log(this.employeeService)
    return this.employeeService.create(createEmployee);
  }

  @Get()
  findAll() {
    console.log("find all")
    // return this.employeeService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employeeService.findOne(+id);
  }

  // patch http://http://localhost:7000/employee/4   ---body should be of type UpdateEmployeePhotoDto which contains only profile pic
  @Patch(':id') 
  update(@Param('id') id: number, @Body() updateEmployeeDto: UpdateEmployeePhotoDto) {
    console.log("dto has",updateEmployeeDto)
    console.log("id is ",id)
   // return this.employeeService.update(+id, updateEmployeeDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.employeeRepository.remove(+id);
  // }
}
