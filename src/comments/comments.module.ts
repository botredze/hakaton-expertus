import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Comments } from "./entity/comments.model";
import { Descussions } from "../discussions/entity/descussions.model";
import { User } from "../users/entity/users.model";

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [
    SequelizeModule.forFeature([Comments, Descussions, User])
  ]
})
export class CommentsModule {}
