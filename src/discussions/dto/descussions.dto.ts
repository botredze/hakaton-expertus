
export class CreateDescussionDto {
  theme: string;
  description: string;
  photo?: string;
}

export class LikeDescussionDto {
  descriptionId: number;
}