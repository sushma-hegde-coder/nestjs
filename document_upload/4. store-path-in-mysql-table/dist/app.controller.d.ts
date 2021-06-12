/// <reference types="multer" />
import { AppService } from './app.service';
import { EmployeeService } from './employee/employee.service';
import { UpdateEmployeePhotoDto } from './employee/dto/update-employee.dto';
export declare class AppController {
    private appService;
    private empService;
    constructor(appService: AppService, empService: EmployeeService);
    getHello(): string;
    uploadedFile(id: number, file: Express.Multer.File, updateEmpPhotoDto: UpdateEmployeePhotoDto, res: any): Promise<any>;
}
