import { Module } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { UserDetailsController } from './user-details.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { UserDetail } from "./entity/user.detail.model";

@Module({
  providers: [UserDetailsService],
  controllers: [UserDetailsController],
  imports: [
    SequelizeModule.forFeature([UserDetail]),
  ]
})
export class UserDetailsModule {}
