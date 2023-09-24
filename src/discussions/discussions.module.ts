import { Module } from '@nestjs/common';
import { DiscussionsService } from './discussions.service';
import { DiscussionsController } from './discussions.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Descussions } from "./entity/descussions.model";
import { PhotosService } from "../photos/photos.service";
import { PhotosModule } from "../photos/photos.module";
import { PhotoModel } from "../photos/photo.model";

@Module({
  providers: [DiscussionsService, PhotosService], // Include PhotosService here
  controllers: [DiscussionsController],
  imports: [
    SequelizeModule.forFeature([Descussions, PhotoModel]),
    PhotosModule
  ]
})
export class DiscussionsModule {}
