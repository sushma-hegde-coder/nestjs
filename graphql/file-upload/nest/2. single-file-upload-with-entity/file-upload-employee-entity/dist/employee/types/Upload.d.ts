/// <reference types="node" />
import Stream from 'stream';
export interface FileUpload {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream: () => Stream;
}
export declare type Person = {
    name: string;
    age: number;
};
