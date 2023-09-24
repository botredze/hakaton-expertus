import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { PhotoModel } from "./photo.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { Descussions } from "../discussions/entity/descussions.model";

@Module({
  controllers: [PhotosController],
  providers: [PhotosService],
  imports: [
    SequelizeModule.forFeature([PhotoModel, Descussions])
  ],
  // imports: [
  //   MulterModule.register({
  //     dest: './uploads',
  //   }),
  // ],
})
export class PhotosModule {}

// import { Module } from '@nestjs/common';
// import { PhotosService } from './photos.service';
//
// @Module({
//   providers: [PhotosService],
//   exports: [PhotosService],
// })
// export class PhotosModule {}
