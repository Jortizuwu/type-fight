import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateHistoryDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  firstUser: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  secondUser: string;
}
