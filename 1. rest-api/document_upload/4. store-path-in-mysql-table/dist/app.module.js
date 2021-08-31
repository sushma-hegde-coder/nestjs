"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("./employee/entities/employee.entity");
const employee_service_1 = require("./employee/employee.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot(), typeorm_1.TypeOrmModule.forFeature([employee_entity_1.Employee]),],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, employee_service_1.EmployeeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map