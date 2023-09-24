import { Module } from '@nestjs/common';
import { SulutionService } from './sulution.service';
import { SulutionController } from './sulution.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Sulution } from "./entity/sulution.model";
import { User } from "../users/entity/users.model";
import { Descussions } from "../discussions/entity/descussions.model";

@Module({
  providers: [SulutionService],
  controllers: [SulutionController],
  imports: [
    SequelizeModule.forFeature([Sulution, User, Descussions])
  ]
})
export class SulutionModule {}
