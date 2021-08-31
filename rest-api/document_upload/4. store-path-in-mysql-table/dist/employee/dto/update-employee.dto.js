"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeePhotoDto = exports.UpdateEmployeeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_employee_dto_1 = require("./create-employee.dto");
class UpdateEmployeeDto extends mapped_types_1.PartialType(create_employee_dto_1.CreateEmployeeDto) {
}
exports.UpdateEmployeeDto = UpdateEmployeeDto;
class UpdateEmployeePhotoDto {
}
exports.UpdateEmployeePhotoDto = UpdateEmployeePhotoDto;
//# sourceMappingURL=update-employee.dto.js.map