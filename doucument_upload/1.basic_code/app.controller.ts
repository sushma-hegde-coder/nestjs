import {
  Controller,
  Get,
  UseInterceptors,
  UploadedFile,
  Post,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //gets created but will not get stored anywhere
  // first check without including dest,check whether in console you are able to see fieldName, originalName etc
  @Post('upload-single-file')
  @UseInterceptors(FileInterceptor('file')) // { dest: './uploads' }
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    //uploads single file but you should specify dest
    console.log(file);
  }

  //upload multiple files
  /* @Post('upload-multiple-files')
  @UseInterceptors(FilesInterceptor('files')) //('files', 3, { dest: './uploads' })) //in postman files: select multiple files and give open
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }*/

  //if you want to store it in application you should give destination
  //gets stored in destination
  @Post('upload-one-file')
  @UseInterceptors(FileInterceptor('file', { dest: './uploads' })) //can give any path ./uploads/docs
  uploadSingle(@UploadedFile() file: Express.Multer.File) {
    //or uploadFile in place of uploadSingle
    //since you are writing the definition for uploadFile in controller only (was actually supposed to write in services),
    //it shows error multiple definition for uploadSinlge, so use it only once in controller(or write the definition in services and call the function inside the controller whenever you want any n oof times)
    console.log(file);
  }

  @Post('upload-many-files')
  @UseInterceptors(
    FilesInterceptor('photos[]', 10, { dest: './uploads/photos' }),
  ) //postman photos[] : upload any no of files less than the count(here 10) specified
  uploadMultiple(@UploadedFiles() files: Express.Multer.File) {
    console.log(files);
  }
}
