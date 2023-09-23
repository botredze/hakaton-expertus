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

@Module({
  imports: [DatabaseModule, UsersModule, UserDetailsModule, AuthModule, RoleModule, DiscussionsModule, PetitionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
