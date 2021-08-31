"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadInterceptor = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
exports.UploadInterceptor = platform_express_1.FileInterceptor('file', {
    storage: multer_1.diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
            cb(null, `${randomName}${path_1.extname(file.originalname)}`);
        }
    })
});
//# sourceMappingURL=upload.service.js.map