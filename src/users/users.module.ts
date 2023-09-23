import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./entity/users.model";
import { AuthModule } from "../auth/auth.module";
import { Role } from "../role/entity/role.model";
import { UserRoles } from "../role/entity/user.roles.model";
import { RoleModule } from "../role/role.module";
import { Descussions } from "../discussions/entity/descussions.model";
import { Sulution } from "../sulution/entity/sulution.model";
import { PetitionModel } from "../petitions/entity/petition.model";
import { Articles } from "../articles/entity/articles.model";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([User, Role, UserRoles, Descussions, Sulution, PetitionModel, Articles]),
    RoleModule
  ],
  exports: [
    UsersService,
  ]
})
export class UsersModule {}
