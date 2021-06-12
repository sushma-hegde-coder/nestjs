import { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { extname } from 'path';

export const imageStorage = diskStorage({
  destination: './uploads/profile',
  filename: (req: any, file: any, callback: any) => {
    const firstName = 'profile';
    callback(null, `${firstName}-${uuid()}${extname(file.originalname)}`);
  },
});
