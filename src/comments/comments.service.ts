import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Descussions } from "../discussions/entity/descussions.model";
import { Comments } from "./entity/comments.model";

@Injectable()
export class CommentsService {

  constructor(
    @InjectModel(Descussions) private descussionsModel: typeof Descussions) {}

  async createComment(descussionId: number, text: string, publicDate: string): Promise<Comments> {
    const descussion = await this.descussionsModel.findByPk(descussionId);

    if (!descussion) {
      throw new NotFoundException('Обсуждение не найдено');
    }

    return await Comments.create({
      text,
      publicDate,
      descussionId
    });
  }

  async deleteComment(commentId: number): Promise<void> {
    const comment = await Comments.findByPk(commentId);

    if (!comment) {
      throw new NotFoundException('Комментарий не найден');
    }

    await comment.destroy();
  }

  async getCommentsForDescussion(descussionId: number): Promise<Comments[]> {
    const descussion = await this.descussionsModel.findByPk(descussionId, {
      include: [Comments]
    });

    if (!descussion) {
      throw new NotFoundException('Обсуждение не найдено');
    }

    return descussion.comments;
  }
}