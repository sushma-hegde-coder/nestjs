import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import * as path from 'path';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee)
  createEmployee(
    @Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput,
  ) {
    return this.employeeService.create(createEmployeeInput);
  }

  @Query(() => [Employee], { name: 'emp' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: 'employee' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.employeeService.findOne(id);
  }

  @Mutation(() => Employee)
  updateEmployee(
    @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput,
  ) {
    return this.employeeService.update(
      updateEmployeeInput.id,
      updateEmployeeInput,
    );
  }

  @Mutation(() => Employee)
  removeEmployee(@Args('id', { type: () => Int }) id: number) {
    return this.employeeService.remove(id);
  }

  @Mutation((returns) => Boolean!, { nullable: true })
  async singleUpload(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ) {
    console.log('hello');
    console.log('filename is', filename);
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    let fileFirstName: string = path.parse(filename).name;
    let extension: string = path.extname(filename);
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(
          createWriteStream(
            `./upload/${fileFirstName}-${randomName}${extension}`,
          ),
        )
        .on('finish', () => resolve(true))
        .on('error', () => reject(false)),
    );
  }
}
