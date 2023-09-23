import { Module } from '@nestjs/common';
import { PetitionsService } from './petitions.service';
import { PetitionsController } from './petitions.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { PetitionModel } from "./entity/petition.model";

@Module({
  providers: [PetitionsService],
  controllers: [PetitionsController],
  imports: [
    SequelizeModule.forFeature([PetitionModel])
  ]
})
export class PetitionsModule {}
