export class CreateArticleDto {
  readonly article: string;
  readonly photo: string;
  readonly publicDate: string;
  readonly theme: string;
  readonly shortDescription: string;
  readonly likeCount: number;
  readonly userId: number;
}


export class UpdateArticleDto {
  readonly article?: string;
  readonly photo?: string;
  readonly publicDate?: string;
  readonly theme?: string;
  readonly shortDescription?: string;
  readonly likeCount?: number;
}
