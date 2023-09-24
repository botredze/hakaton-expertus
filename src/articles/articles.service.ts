import { Injectable, NotFoundException } from "@nestjs/common";
import { Articles } from "./entity/articles.model";
import { CreateArticleDto, UpdateArticleDto } from "./dto/articles.dto";
import { User } from "../users/entity/users.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class ArticlesService {

  constructor(
    @InjectModel(Articles) private articlesModel: typeof Articles,
    @InjectModel(User) private userModel: typeof User
  ) {}

  async createArticle(data: CreateArticleDto): Promise<Articles> {
    const article = await this.articlesModel.create(data);
    return article;
  }

  async getArticleById(id: string): Promise<Articles> {
    const article = await this.articlesModel.findByPk(id, { include: [User] });

    if (!article) {
      throw new NotFoundException('Статья не найдена');
    }

    return article;
  }

  async getAllArticles(): Promise<Articles[]> {
    return await this.articlesModel.findAll({ include: [User] });
  }

  async updateArticle(id: string, data: UpdateArticleDto): Promise<Articles> {
    const [updated] = await this.articlesModel.update(data, {
      where: { id }
    });

    if (updated) {
      return this.getArticleById(id);
    }

    throw new NotFoundException('Статья не найдена');
  }

  async deleteArticle(id: string): Promise<void> {
    const deleted = await this.articlesModel.destroy({
      where: { id }
    });

    if (!deleted) {
      throw new NotFoundException('Статья не найдена');
    }
  }

  async incrementLikeCount(id: string): Promise<Articles> {
    const article = await this.articlesModel.findByPk(id);

    if (!article) {
      throw new NotFoundException('Статья не найдена');
    }

    article.likeCount += 1;
    await article.save();

    return article;
  }
}
