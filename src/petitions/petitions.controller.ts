import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreatePetitionDto } from "./dto/petition.dto";
import { PetitionsService } from "./petitions.service";

@Controller('petitions')
export class PetitionsController {
  constructor(private readonly petitionsService: PetitionsService) {}

  @Post(':userId')
  createPetition(
    @Param('userId') userId: number,
    @Body() data: CreatePetitionDto
  ) {
    return this.petitionsService.createPetition(userId, data);
  }

  @Get(':id')
  getPetitionById(@Param('id') id: number) {
    return this.petitionsService.getPetitionById(id);
  }

  @Get()
  getAllPetitions() {
    return this.petitionsService.getAllPetitions();
  }

  @Get('top')
  getTopPetitions() {
    return this.petitionsService.getTopPetitions();
  }

  @Post('increment/:id')
  incrementSignatures(@Param('id') id: number) {
    return this.petitionsService.incrementSignatures(id);
  }

  @Get('filtered')
  getPetitionsBySignatures(@Query('signatures') signatures: number) {
    return this.petitionsService.getPetitionsBySignatures(signatures);
  }

}
