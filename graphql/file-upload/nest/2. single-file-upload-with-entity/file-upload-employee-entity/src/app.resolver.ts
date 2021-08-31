import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { AppService } from './app.service';
import * as path from 'path';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}
  @Mutation((returns) => Boolean!, { nullable: true })
  async singleFileUpload(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ) {
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
