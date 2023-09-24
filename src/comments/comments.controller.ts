import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CommentsService } from "./comments.service";

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':descussionId')
  createComment(
    @Param('descussionId') descussionId: number,
    @Body('text') text: string,
    @Body('publicDate') publicDate: string
  ) {
    return this.commentsService.createComment(descussionId, text, publicDate);
  }

  @Delete(':commentId')
  deleteComment(@Param('commentId') commentId: number) {
    return this.commentsService.deleteComment(commentId);
  }

  @Get(':descussionId')
  getCommentsForDescussion(@Param('descussionId') descussionId: number) {
    return this.commentsService.getCommentsForDescussion(descussionId);
  }
}
