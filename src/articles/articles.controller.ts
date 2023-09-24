import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateArticleDto, UpdateArticleDto } from "./dto/articles.dto";
import { ArticlesService } from "./articles.service";

@Controller('articles')
export class ArticlesController {

  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  createArticle(@Body() data: CreateArticleDto) {
    return this.articlesService.createArticle(data);
  }

  @Get(':id')
  getArticleById(@Param('id') id: string) {
    return this.articlesService.getArticleById(id);
  }

  @Get()
  getAllArticles() {
    return this.articlesService.getAllArticles();
  }

  @Put(':id')
  updateArticle(@Param('id') id: string, @Body() data: UpdateArticleDto) {
    return this.articlesService.updateArticle(id, data);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.deleteArticle(id);
  }

  @Post('like/:id')
  incrementLikeCount(@Param('id') id: string) {
    return this.articlesService.incrementLikeCount(id);
  }
}
