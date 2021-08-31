/// <reference types="multer" />
import { UpdateEmployeePhotoDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
export declare class EmployeeService {
    employeeRepository: Repository<Employee>;
    constructor(employeeRepository: Repository<Employee>);
    create(createEmployee: Employee): Promise<Employee>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, file: Express.Multer.File, updateEmployeeDto: UpdateEmployeePhotoDto, res: any): Promise<any>;
    remove(id: number): string;
}
