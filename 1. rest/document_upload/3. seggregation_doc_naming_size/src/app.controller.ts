import {
  Controller,
  Get,
  UseInterceptors,
  UploadedFile,
  Post,
  Param,
  Res,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';
import { extname } from 'path'; //this is extension name--.png, .jpg, .docx
import { imageFileFilter } from './utils/filter';
import { storage } from './utils/storage';
import { imageSize } from './utils/fileSize';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      limits: imageSize,
      storage: storage,
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileReponse);
    });
    return response;
  }

  @Get(':filepath') //http://localhost:5000/4c6f2ad2ee0e250df07835cced0c8ed6
  seeUploadedFile(@Param('filepath') file, @Res() res) {
    return res.sendFile(file, { root: './uploads/images' });
    //image--visible in browser --you have save image as , so you can download
    //txt -- visible in browser -- you have save as --so you can download
    //pdf- visible and there is download option provided by browser
    //doc- not visible in browser-- directly gets downloaded when you hit end point
    //md -- visible in browser -- you have save as --so you can download
    //xlsx - not visible when you write http://localhost:5000/master-doc-image.xlsx it gets downloaded automatically
  }
}
