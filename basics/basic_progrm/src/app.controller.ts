import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { identity } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //nest has created object of class AppService and has injected it
  //you are not creating it someone else has created it, they have to load it for you ---so it is injected
  //they have created a dependency object and injected into the constructor, all u r doing is using the object
  //only those classes can be injected who have decorator @Injectable
  //you will create the service, write functionality and inject the service, everything is taken care by nest internally

  //Get : /
  @Get()
  getHello(): string {
    return this.appService.getTestFromService();
  }

  //path parameter
  //GET : /100
  @Get(':id')
  getTestWithPathParams(@Param('id') id: string): string {
    console.log('get param', id);
    return 'get test passed when passed query parameter';
  }

  //query parameter
  //GET : /?name=test&age=12
  @Get()
  getTestWithQueryParams(
    @Query('name') name: string,
    @Query('age') age: number,
  ): string {
    console.log('name in query param is', name);
    console.log('age in query param is', age);
    return 'testing get method with query params is working ';
  }

  //POST : /
  @Post()
  postTest(@Body() data: any) {
    console.log(data);
    return 'testing post method function body,it is working';
  }

  //PUT : /
  @Put()
  putTest() {
    return 'testing put method function'; //could have written separate function in app.service.ts and use just name of function just like how you did it in get
    //that is the best practice. Here it is just to understand everything is written at one place, just like how you wrote
    //inside router.get(.................), router.put(..............)   without writing separate function in a controller
  }

  //PUT : /100   ----path parameter
  @Put(':id')
  putTestWithParam(@Param('id') param_passed: string, @Body() body_data: any) {
    console.log('parameter passed is', param_passed);
    console.log('body is', body_data);
    return 'testing put method when given param and body both, it is working';
  }

  //DELETE : /
  @Delete()
  deleteTest() {
    return 'testing delete method function';
  }

  //DELETE: /100
  @Delete(':id')
  deleteTestWithParam(@Param('id') test: string) {
    //whatever you pass in parameter, will come in the variable test
    console.log(test);
    return 'testing delete method with parameter';
  }
}
