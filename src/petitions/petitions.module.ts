import { Module } from '@nestjs/common';
import { PetitionsService } from './petitions.service';
import { PetitionsController } from './petitions.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { PetitionModel } from "./entity/petition.model";
import { User } from "../users/entity/users.model";

@Module({
  providers: [PetitionsService],
  controllers: [PetitionsController],
  imports: [
    SequelizeModule.forFeature([PetitionModel, User])
  ]
})
export class PetitionsModule {}
