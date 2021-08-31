import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeePhotoDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) public employeeRepository: Repository<Employee>, //inject repository object for the Tree table, for tree table repository is created
  ) {}
  create(createEmployee: Employee) {
    console.log(createEmployee)
     return this.employeeRepository.save(createEmployee); ;
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  async update(id: number,file: Express.Multer.File, updateEmployeeDto: UpdateEmployeePhotoDto, res:any) {
    console.log("in update")
    console.log("dto is",updateEmployeeDto)
    console.log("dto class is",UpdateEmployeePhotoDto)
    const updatedEmployee = await this.employeeRepository.update(
      { id: id },
      {
        profilePicture: updateEmployeeDto.profilePic,      
      },
     )     
    console.log("updated employee",updatedEmployee)
    console.log("file",file)
    console.log("file name",file.filename)
   return res.sendFile(file.filename, { root: './uploads' }); 
    //return updatedEmployee;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
