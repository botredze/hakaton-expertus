import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Articles } from "./entity/articles.model";
import { User } from "../users/entity/users.model";

@Module({
  providers: [ArticlesService],
  controllers: [ArticlesController],
  imports: [
    SequelizeModule.forFeature([Articles, User])
  ]
})
export class ArticlesModule {}
