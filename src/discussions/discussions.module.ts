import { Module } from '@nestjs/common';
import { DiscussionsService } from './discussions.service';
import { DiscussionsController } from './discussions.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Descussions } from "./entity/descussions.model";
import { PhotosService } from "../photos/photos.service";

@Module({
  providers: [DiscussionsService],
  controllers: [DiscussionsController],
  imports: [
    SequelizeModule.forFeature([Descussions]),
    PhotosService
  ]
})
export class DiscussionsModule {}
