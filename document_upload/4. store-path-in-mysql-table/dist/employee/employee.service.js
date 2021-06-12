"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const update_employee_dto_1 = require("./dto/update-employee.dto");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("./entities/employee.entity");
const typeorm_2 = require("typeorm");
let EmployeeService = class EmployeeService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    create(createEmployee) {
        console.log(createEmployee);
        return this.employeeRepository.save(createEmployee);
        ;
    }
    findAll() {
        return `This action returns all employee`;
    }
    findOne(id) {
        return `This action returns a #${id} employee`;
    }
    async update(id, file, updateEmployeeDto, res) {
        console.log("in update");
        console.log("dto is", updateEmployeeDto);
        console.log("dto class is", update_employee_dto_1.UpdateEmployeePhotoDto);
        const updatedEmployee = await this.employeeRepository.update({ id: id }, {
            profilePicture: updateEmployeeDto.profilePic,
        });
        console.log("updated employee", updatedEmployee);
        console.log("file", file);
        console.log("file name", file.filename);
        return res.sendFile(file.filename, { root: './uploads' });
    }
    remove(id) {
        return `This action removes a #${id} employee`;
    }
};
EmployeeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map