"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("./employee.service");
const employee_resolver_1 = require("./employee.resolver");
const employee_entity_1 = require("./entities/employee.entity");
const typeorm_1 = require("@nestjs/typeorm");
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([employee_entity_1.Employee])],
        providers: [employee_resolver_1.EmployeeResolver, employee_service_1.EmployeeService],
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map