import { EmployeeService } from './employee.service';
import { UpdateEmployeePhotoDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployee: Employee): Promise<Employee>;
    findAll(): void;
    findOne(id: number): string;
    update(id: number, updateEmployeeDto: UpdateEmployeePhotoDto): void;
}
