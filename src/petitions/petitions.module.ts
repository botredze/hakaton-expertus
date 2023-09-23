import { Module } from '@nestjs/common';
import { PetitionsService } from './petitions.service';
import { PetitionsController } from './petitions.controller';

@Module({
  providers: [PetitionsService],
  controllers: [PetitionsController]
})
export class PetitionsModule {}
