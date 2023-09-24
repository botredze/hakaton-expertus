import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateSulutionDto, UpdateSulutionDto } from "./dto/sulution.dto";
import { SulutionService } from "./sulution.service";

@Controller('sulution')
export class SulutionController {
  constructor(private readonly sulutionService: SulutionService) {}

  @Post()
  createSulution(@Body() data: CreateSulutionDto) {
    return this.sulutionService.createSulution(data);
  }

  @Get(':id')
  getSulutionById(@Param('id') id: number) {
    return this.sulutionService.getSulutionById(id);
  }

  @Get()
  getAllSulutions() {
    return this.sulutionService.getAllSulutions();
  }

  @Put(':id')
  updateSulution(@Param('id') id: number, @Body() data: UpdateSulutionDto) {
    return this.sulutionService.updateSulution(id, data);
  }

  @Delete(':id')
  deleteSulution(@Param('id') id: number) {
    return this.sulutionService.deleteSulution(id);
  }
}
