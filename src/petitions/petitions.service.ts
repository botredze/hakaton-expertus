import { Injectable, NotFoundException } from "@nestjs/common";
import { PetitionModel } from "./entity/petition.model";
import { Op } from "sequelize";
import { User } from "../users/entity/users.model";
import { CreatePetitionDto } from "./dto/petition.dto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class PetitionsService {
  constructor(
    @InjectModel(PetitionModel) private petitionModel: typeof PetitionModel,
    @InjectModel(User) private userModel: typeof User
  ) {}

  async createPetition(userId: number, data: CreatePetitionDto): Promise<PetitionModel> {
    const user = await this.userModel.findByPk(userId);

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    return await this.petitionModel.create({
      ...data,
      userId
    });
  }

  async getPetitionById(id: number): Promise<PetitionModel> {
    const petition = await this.petitionModel.findByPk(id, { include: [User] });

    if (!petition) {
      throw new NotFoundException('Петиция не найдена');
    }

    return petition;
  }

  async getAllPetitions(): Promise<PetitionModel[]> {
    return await this.petitionModel.findAll({ include: [User] });
  }

  async getTopPetitions(): Promise<PetitionModel[]> {
    return await this.petitionModel.findAll({
      order: [['solution', 'DESC']],
      include: [User]
    });
  }


  async getPetitionsBySignatures(signatures: number): Promise<PetitionModel[]> {
    return await this.petitionModel.findAll({
      where: {
        signatures: {
          [Op.gte]: signatures
        }
      },
      include: [User]
    });
  }

  async incrementSignatures(id: number): Promise<PetitionModel> {
    const petition = await this.petitionModel.findByPk(id);

    if (!petition) {
      throw new NotFoundException('Петиция не найдена');
    }

    petition.signatures += 1;
    await petition.save();

    return petition;
  }
}
