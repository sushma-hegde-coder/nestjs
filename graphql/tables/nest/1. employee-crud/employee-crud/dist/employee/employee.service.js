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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employee_entity_1 = require("./entities/employee.entity");
let EmployeeService = class EmployeeService {
    constructor(employeeRespository) {
        this.employeeRespository = employeeRespository;
    }
    async create(createEmployeeInput) {
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
    async findOne(id) {
        return await this.employeeRespository.findOne(id);
    }
    async update(id, updateEmployeeInput) {
        const { name, email, age } = updateEmployeeInput;
        const update = await this.employeeRespository.update({ id: id }, {
            name: name,
            email: email,
            age: age,
        });
        if (update.affected === 1) {
            return true;
        }
    }
    async remove(id) {
        return await this.employeeRespository.delete(id);
    }
};
EmployeeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map