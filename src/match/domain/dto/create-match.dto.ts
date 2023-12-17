import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMatchDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  firstUser: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  secondUser: string;
}
