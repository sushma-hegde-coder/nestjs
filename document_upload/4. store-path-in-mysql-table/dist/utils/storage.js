"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageStorage = void 0;
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path_1 = require("path");
exports.imageStorage = multer_1.diskStorage({
    destination: './uploads/profile',
    filename: (req, file, callback) => {
        const firstName = 'profile';
        callback(null, `${firstName}-${uuid_1.v4()}${path_1.extname(file.originalname)}`);
    },
});
//# sourceMappingURL=storage.js.map