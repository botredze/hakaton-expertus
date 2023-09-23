import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { DiscussionsModule } from './discussions/discussions.module';
import { PetitionsModule } from './petitions/petitions.module';
import { ArticlesModule } from './articles/articles.module';
import { PhotosService } from './photos/photos.service';
import { PhotosModule } from './photos/photos.module';
import { SulutionModule } from './sulution/sulution.module';
import { CommentsModule } from './comments/comments.module';
@Module({
  imports: [DatabaseModule, UsersModule, UserDetailsModule, AuthModule, RoleModule, DiscussionsModule, PetitionsModule, ArticlesModule, PhotosModule, CommentsModule, SulutionModule],
  controllers: [AppController],
  providers: [AppService, PhotosService],
})
export class AppModule {}
