import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { InjectModel } from "@nestjs/sequelize";
import { PhotoModel } from "./photo.model";
// import { MulterFile } from "./photos.controller";
@Injectable()
export class PhotosService {


  // private s3 = new AWS.S3();

  // async uploadFile(file: MulterFile, bucketName: string, folderName: string): Promise<string> {
  //   const params = {
  //     Bucket: bucketName,
  //     Key: `${folderName}/${file.originalname}`,
  //     Body: file.buffer,
  //     ContentType: file.mimetype,
  //     ACL: 'public-read',
  //   };
  //
  //   try {
  //     const data = await this.s3.upload(params).promise();
  //     return data.Location;
  //   } catch (error) {
  //     throw new Error(`Ошибка загрузки файла: ${error.message}`);
  //   }
  // }

  constructor(@InjectModel(PhotoModel) private photoModel: typeof PhotoModel) {
  }

  async uploadPhoto(photoUrl: string){
    return this.photoModel.create(photoUrl)
  }
}
