import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./entity/role.model";
import { User } from "../users/entity/users.model";
import { UserRoles } from "./entity/user.roles.model";

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
    RoleService
  ]
})
export class RoleModule {}
