import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { FileUpload } from 'graphql-upload';
export declare class EmployeeResolver {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    createEmployee(createEmployeeInput: CreateEmployeeInput): Promise<{
        name: string;
        email: string;
        age: number;
    } & Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    updateEmployee(updateEmployeeInput: UpdateEmployeeInput): Promise<boolean>;
    removeEmployee(id: number): Promise<import("typeorm").DeleteResult>;
    singleUpload({ createReadStream, filename }: FileUpload): Promise<unknown>;
}
