export class CreateSulutionDto {
  readonly sulutionText: string;
  readonly publicDate: string;
  readonly userId: number;
  readonly descussionId: number;
}


export class UpdateSulutionDto {
  readonly sulutionText?: string;
  readonly publicDate?: string;
  readonly userId?: number;
  readonly descussionId?: number;
}
