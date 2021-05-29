import { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { extname } from 'path';

export const storage = diskStorage({
  destination: './uploads/images',
  filename: (req: any, file: any, callback: any) => {
    const firstName = 'master-image';
    callback(null, `${firstName}-${uuid()}${extname(file.originalname)}`);
  },
});
