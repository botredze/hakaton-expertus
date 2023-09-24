import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSulutionDto, UpdateSulutionDto } from "./dto/sulution.dto";
import { Sulution } from "./entity/sulution.model";
import { Descussions } from "../discussions/entity/descussions.model";
import { User } from "../users/entity/users.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class SulutionService {

  constructor(
    @InjectModel(Sulution) private sulutionModel: typeof Sulution,
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(Descussions) private descussionsModel: typeof Descussions
  ) {}

  async createSulution(data: CreateSulutionDto): Promise<Sulution> {
    const sulution = await this.sulutionModel.create(data);
    return sulution;
  }

  async getSulutionById(id: number): Promise<Sulution> {
    const sulution = await this.sulutionModel.findByPk(id, { include: [User, Descussions] });

    if (!sulution) {
      throw new NotFoundException('Решение не найдено');
    }

    return sulution;
  }

  async getAllSulutions(): Promise<Sulution[]> {
    return await this.sulutionModel.findAll({ include: [User, Descussions] });
  }

  async updateSulution(id: number, data: UpdateSulutionDto): Promise<Sulution> {
    const [updated] = await this.sulutionModel.update(data, {
      where: { id }
    });

    if (updated) {
      return this.getSulutionById(id);
    }

    throw new NotFoundException('Решение не найдено');
  }

  async deleteSulution(id: number): Promise<void> {
    const deleted = await this.sulutionModel.destroy({
      where: { id }
    });

    if (!deleted) {
      throw new NotFoundException('Решение не найдено');
    }
  }
}
