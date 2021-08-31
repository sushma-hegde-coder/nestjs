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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_upload_1 = require("graphql-upload");
const fs_1 = require("fs");
const app_service_1 = require("./app.service");
const path = require("path");
let AppResolver = class AppResolver {
    constructor(appService) {
        this.appService = appService;
    }
    async singleFileUpload({ createReadStream, filename }) {
        console.log('filename is', filename);
        const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
        let fileFirstName = path.parse(filename).name;
        let extension = path.extname(filename);
        return new Promise(async (resolve, reject) => createReadStream()
            .pipe(fs_1.createWriteStream(`./upload/${fileFirstName}-${randomName}${extension}`))
            .on('finish', () => resolve(true))
            .on('error', () => reject(false)));
    }
};
__decorate([
    graphql_1.Mutation((returns) => Boolean, { nullable: true }),
    __param(0, graphql_1.Args({ name: 'file', type: () => graphql_upload_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof graphql_upload_1.FileUpload !== "undefined" && graphql_upload_1.FileUpload) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "singleFileUpload", null);
AppResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppResolver);
exports.AppResolver = AppResolver;
//# sourceMappingURL=app.resolver.js.map