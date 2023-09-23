import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateDescussionDto, LikeDescussionDto } from "./dto/descussions.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Descussions } from "./entity/descussions.model";
import { PhotosService } from "../photos/photos.service";
import { Sequelize } from "sequelize";

@Injectable()
export class DiscussionsService {
  constructor(@InjectModel(Descussions) private descussionsModel: typeof Descussions,
                                        private photoService: PhotosService) {
  }

  async createDiscussion(dto: CreateDescussionDto){
    const {photo} = dto

    if(photo) {
      await this.photoService.uploadPhoto(photo)
    }

    const descussion = await this.descussionsModel.create(dto)

    return descussion
  }

  async getAllDiscussion() {
    return this.descussionsModel.findAll({include: {all: true}})
  }
  async likedSelectDiscussion(dto: LikeDescussionDto){
    const { descriptionId } = dto;

    try {
      const [affectedRows] = await this.descussionsModel.update(
        { reactionLike: Sequelize.literal('"reactionLike" + 1') },
        {
          where: {
            id: descriptionId
          }
        }
      );

      if (affectedRows === 0) {
        throw new HttpException('Публикация не найдена', HttpStatus.NOT_FOUND);
      }

      return { success: true };
    } catch (error) {
      throw new HttpException('Ошибка при обновлении публикации', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getDescussuinById(id: number){

    const descussuin = this.descussionsModel.findOne({where: {id}})

    if(!descussuin){
      throw new HttpException('Публикация не найдена', HttpStatus.NOT_FOUND)
    }

    return descussuin
  }

}
