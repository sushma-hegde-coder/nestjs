import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRespository: Repository<Employee>,
  ) {}
  async create(createEmployeeInput: CreateEmployeeInput) {
    const { name, email, age } = createEmployeeInput;
    return await this.employeeRespository.save({
      name: name,
      email: email,
      age: age,
    });
  }

  async findAll() {
    return await this.employeeRespository.find();
  }

  async findOne(id: number) {
    return await this.employeeRespository.findOne(id);
  }

  async update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    const { name, email, age } = updateEmployeeInput;
    const update = await this.employeeRespository.update(
      { id: id },
      {
        name: name,
        email: email,
        age: age,
      },
    );
    if (update.affected === 1) {
      return true;
    }
  }

  async remove(id: number) {
    return await this.employeeRespository.delete(id);
  }
}
