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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const employee_service_1 = require("./employee/employee.service");
const upload_service_1 = require("./upload.service");
const update_employee_dto_1 = require("./employee/dto/update-employee.dto");
let AppController = class AppController {
    constructor(appService, empService) {
        this.appService = appService;
        this.empService = empService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async uploadedFile(id, file, updateEmpPhotoDto, res) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return this.empService.update(+id, file, updateEmpPhotoDto, res);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.UseInterceptors(upload_service_1.UploadInterceptor),
    common_1.Post('image/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.UploadedFile()), __param(2, common_1.Body()), __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, update_employee_dto_1.UpdateEmployeePhotoDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadedFile", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService, employee_service_1.EmployeeService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map