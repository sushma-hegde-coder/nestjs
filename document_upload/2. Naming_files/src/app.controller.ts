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
import { extname } from 'path'; //this is extension name--.png, .jpg, .docs

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //takes all docs, images,
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadedFile(@UploadedFile() file: Express.Multer.File) {
    //this is just a response...it is going to give the details about how the file is stored in folder
    const response = {
      originalname: file.originalname, //--name of the file you are uploading according to how it is actually it is //im uploading img named master
      filename: file.filename, //how it is stored in folder in this application
    };
    return response;
  }

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      storage: diskStorage({
        destination: './uploads/images',

        //give the filename before it is getting stored in folder
        filename: (req: any, file: any, cb: any) => {
          const firstName = 'master-image'; //I'm giving name of the file as meta-doc-image..you have to write is inside a variable, you can't directly write string
          //cb(null, `${randomName}${extname(file.originalname)}`); //attach the filename given by you to extension --if you don't attach extname, it will not get stored in proper format
          cb(null, `${firstName}-${uuid()}${extname(file.originalname)}`); //can attach any no of strings
        },
      }),
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
