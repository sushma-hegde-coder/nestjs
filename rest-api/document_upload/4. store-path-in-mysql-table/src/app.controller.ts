import {
  Controller,
  Get,
  UseInterceptors,
  UploadedFile,
  Post,
  Param,
  Res,
  Body,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';
import { extname } from 'path'; //this is extension name--.png, .jpg, .docx
import { imageFileFilter } from './utils/filter';
import { imageStorage } from './utils/storage';
import { imageSize } from './utils/fileSize';
import { EmployeeService } from './employee/employee.service';
import { PATH_METADATA } from '@nestjs/common/constants';
import { UploadInterceptor } from './upload.service';
import { UpdateEmployeePhotoDto } from './employee/dto/update-employee.dto';

@Controller()
export class AppController {
  constructor(private appService: AppService, private empService:EmployeeService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseInterceptors(UploadInterceptor)
  @Post('image/:id') 
  async uploadedFile(@Param('id') id: number, @UploadedFile() file: Express.Multer.File,@Body() updateEmpPhotoDto: UpdateEmployeePhotoDto,@Res() res:any) {
    //this is just a response...it is going to give the details about how the file is stored in folder
    const response = {
      originalname: file.originalname, //--name of the file you are uploading according to how it is actually it is //im uploading img named master
      filename: file.filename, //how it is stored in folder in this application
    };
    return this.empService.update(+id,file,updateEmpPhotoDto,res)
  }
}

//   @Get(':filepath') 
//   seeUploadedFile(@Param('filepath') file, @Res() res) {
//     return res.sendFile(file, { root: './uploads/profile' });    
//   }
// }
//   @Post('upload-image/hello') 
//   getTestWithPathParams(@Param('id') id: string){}
//   @UseInterceptors(FileInterceptor('image',{
//     limits: imageSize,
//     storage: imageStorage,
//     fileFilter: imageFileFilter,
//   }),  
// )
//   async uploadedFile(@UploadedFile() file: Express.Multer.File) {
//      const response = {
//       originalname: file.originalname, 
//       filename: file.filename, 
//     };    
//     console.log("app service is",this.appService)
//     console.log("employee service",this.empService)
//     // console.log("id is",id)   
//     // console.log("id after assigning",id)
//     // console.log("path of current page",window.location.href);    
    
//     console.log("response",response)
//     console.log(file.filename)
//     console.log(file.path)
//     console.log(response);    
//     let routePath = Reflect.getMetadata(PATH_METADATA,AppController);    
//      routePath += '/' + Reflect.getMetadata(PATH_METADATA, AppController.prototype.serveStatic);
//     console.log("route path",routePath); 
//     // return {
//     //   message: 'Hello World!',
//     // };   
//     var id=3;
//     return this.empService.update(+id,{
//       "profilePic":file.filename
//   });
//   } 
