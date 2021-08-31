import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
export declare class EmployeeService {
    private employeeRespository;
    constructor(employeeRespository: Repository<Employee>);
    create(createEmployeeInput: CreateEmployeeInput): Promise<{
        name: string;
        email: string;
        age: number;
    } & Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    update(id: number, updateEmployeeInput: UpdateEmployeeInput): Promise<boolean>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
