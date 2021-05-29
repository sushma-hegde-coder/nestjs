/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    uploadedFile(file: Express.Multer.File): Promise<{
        originalname: string;
        filename: string;
    }>;
    uploadMultipleFiles(files: any): Promise<any[]>;
    seeUploadedFile(file: any, res: any): any;
}
