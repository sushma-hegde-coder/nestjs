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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Employee = class Employee {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Employee.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Employee.prototype, "age", void 0);
Employee = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.entity.js.map