import { FileUpload } from 'graphql-upload';
import { AppService } from './app.service';
export declare class AppResolver {
    private readonly appService;
    constructor(appService: AppService);
    singleFileUpload({ createReadStream, filename }: FileUpload): Promise<unknown>;
}
