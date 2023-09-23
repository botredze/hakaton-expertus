import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./entity/role.model";
import { User } from "../users/entity/users.model";

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [
    SequelizeModule.forFeature([Role, User])
  ],
  exports: [
    RoleService
  ]
})
export class RoleModule {}
