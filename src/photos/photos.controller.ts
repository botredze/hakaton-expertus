import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PhotosService } from "./photos.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { extname } from 'path';

// export interface MulterFile {
//   fieldname: string;
//   originalname: string;
//   encoding: string;
//   mimetype: string;
//   buffer: Buffer;
//   size: number;
// }

@Controller('photos')
export class PhotosController {

  // constructor(private readonly photosService: PhotosService) {
  // }
  // @Post()
  // @UseInterceptors(FileInterceptor('file', { storage: diskStorage({
  //     destination: './uploads',
  //     filename: (req, file, cb) => {
  //       const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
  //       return cb(null, `${randomName}${extname(file.originalname)}`);
  //     },
  //   }) }))
  // async uploadFile(@UploadedFile() file: MulterFile): Promise<{ imageUrl: string }> {
  //   const bucketName = 'expertus';
  //   const folderName = 'uploads';
  //
  //   try {
  //     const imageUrl = await this.photosService.uploadFile(file, bucketName, folderName);
  //     return { imageUrl };
  //   } catch (error) {
  //     throw new Error(`Ошибка загрузки файла: ${error.message}`);
  //   }
  // }
}
